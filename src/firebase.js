


export function uploadBlobFile(cpf, fileName, file, callBack, progressCallBack) {
    console.log(cpf);
    // Create a root reference
    var storageRef = firebase.storage().ref();

    var metadata = {
        contentType: file.type
    }

    console.log(metadata.contentType);

    var uploadTask = storageRef.child(`${cpf}/${fileName}`).put(file, metadata);
    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        var state = '';
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                state = "Enviando";
                break;
        }
        if(progress < 100){
            progressCallBack(`${state}: ${progress}%`);    
        }else{
            progressCallBack(`Upload Completo`);
        }
    }, function (error) {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;

            case 'storage/canceled':
                // User canceled the upload
                break;
            // Handle unsuccessful uploads
            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
        }
    }, function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL);
            callBack(downloadURL)
        });
    });
}
