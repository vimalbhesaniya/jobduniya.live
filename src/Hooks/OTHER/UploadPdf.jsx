import React, { useState } from 'react';
import firebase from 'firebase/compat/app'
import "firebase/compat/storage"


const useUploadPdf = () => {
    const [uploadProgress, setUploadProgress] = useState(0);
    const [url , setUrl] = useState("");

    const handleUpload = (selectedFile) => {
        if (!selectedFile) return;

        const uploadTask = firebase.storage().ref(`/resumes/${selectedFile.name}`).put(selectedFile);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setUploadProgress(progress);
            },
            (error) => {
                console.error(error);
            },
            () => {
                uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    console.log("File uploaded successfully! Download URL:", url);
                    setUrl(url)
                });
                setUploadProgress(0);
            }
        );
    };

    return {handleUpload, uploadProgress , url};
};

export default useUploadPdf;