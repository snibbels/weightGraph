import React from 'react'
import { Dropbox } from 'dropbox'
import { defaults } from '../redux/constants'

const localStorage = window.localStorage
const accessToken = localStorage.getItem('accessToken')

const dbx = new Dropbox({
    accessToken
})

const uploadStoreData = () => {
    const { LOCALSTORAGE_NAME, UPLOAD_FILE_NAME } = defaults
    const storeData = localStorage[LOCALSTORAGE_NAME]

    dbx.filesUpload({
        "path": "/" + UPLOAD_FILE_NAME,
        "contents": [storeData],
        "mode": { ".tag": "overwrite" }
    })
        .then(r => console.log(r))
        .catch(err => console.log(err))
}

const downloadStoreData = () => dbx.filesDownload({
    path: "/" + defaults.UPLOAD_FILE_NAME
})
    .then(res => importStoreData(res.fileBlob))
    .catch(err => console.log(err))

const importStoreData = blob => {
    if (!blob)
        throw new Error("no file found")

    const reader = new FileReader()
    reader.onloadend = () => {
        console.log(reader.result)
        const storeDump = reader.result
        if (storeDump)
            localStorage[defaults.LOCALSTORAGE_NAME] = storeDump
    }
    reader.readAsText(blob)
}

window.dbx = dbx

export default function DropboxConnector({ ...props }) {
    let _input;
    const saveToken = () => localStorage.setItem(
        "accessToken", _input.value
    );


    if (!accessToken)
        return (<input ref={v => _input = v} onChange={saveToken} />)

    return (
        <div {...props}>
            <h3>Dropbox</h3>
            <span>Token: {accessToken}</span>
            <button
                onClick={uploadStoreData}
                className="w3-button">
                Upload
            </button>
            <button
                onClick={downloadStoreData}
                className="w3-button">
                download
            </button>
        </div>
    )
}
