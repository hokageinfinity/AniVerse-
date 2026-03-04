async function uploadVideo() {
  const file = document.getElementById("videoFile").files[0];
  const title = document.getElementById("title").value;
  const anime = document.getElementById("anime").value;

  const storageRef = storage.ref("videos/" + file.name);
  await storageRef.put(file);
  const url = await storageRef.getDownloadURL();

  await db.collection("videos").add({
    title,
    anime,
    url,
    likes: 0,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  alert("Uploaded!");
}
