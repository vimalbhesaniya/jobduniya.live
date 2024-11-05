const FileUpload = () => {
    const [ImgUrl, setImgUrl] = useState();
    const handleFileUpload = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const storageRef = firebase.storage().ref();
            const fileRef = storageRef.child(selectedFile.name)

            fileRef.put(selectedFile).then((snapshot) => {
                snapshot.ref.getDownloadURL().then((downloadURL) => {
                    console.log(downloadURL);
                    setImgUrl(downloadURL)
                })
            })
        } else {
            console.log("No File Selected, soo Select One!");
        }
    }
}