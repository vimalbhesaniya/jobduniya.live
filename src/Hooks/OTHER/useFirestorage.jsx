import React, { useCallback, useContext, useState } from 'react'
import { EnableSpinner } from '../..'
import firebase from 'firebase/compat/app'
import "firebase/compat/storage"
import { toast } from 'react-toastify'

const useFirestorage = () => {
    const [imageUrl, setImageUrl] = useState("");
    const [setSpinnerState, spinner] = useContext(EnableSpinner)
    // const Upload = useCallback((img, path, type) => {
    //     if (img) {
    //         const storageRef = firebase.storage().ref(path)
    //         const fileRef = storageRef.child(img)
    //         const metadata = {
    //             contentType: type,
    //         };
    //         setSpinnerState(true)
    //         fileRef.put(img, metadata)
    //             .then((snapshot) => {
    //                 snapshot.ref.getDownloadURL()
    //                     .then((downloadUrl) => {
    //                         if (downloadUrl) {
    //                             setImageUrl(downloadUrl)
    //                             setSpinnerState(false);
    //                             return downloadUrl
    //                         }
    //                     })
    //             })
    //     }
    // }, []);
    const Upload = useCallback((img) => {
        if (img) {
            const storageRef = firebase.storage().ref(`profile/${img.name}`).put(img);
            storageRef.then((snapshot) => {
                const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    
                    setSpinnerState(false);
                    toast.success("Image uploaded successfully")
                    console.log(downloadURL);
                    setImageUrl(downloadURL);
                })
            });
        }
    });



    return { imageUrl, Upload }
}

export default useFirestorage