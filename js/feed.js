const feed = document.getElementById("videoFeed");

db.collection("videos").orderBy("timestamp", "desc")
.onSnapshot(snapshot => {
  feed.innerHTML = "";
  snapshot.forEach(doc => {
    const videoData = doc.data();

    const container = document.createElement("div");
    container.className = "video-container";

    container.innerHTML = `
      <video src="${videoData.url}" autoplay loop muted></video>
      <div class="video-info">
        <h3>${videoData.title}</h3>
        <p>#${videoData.anime}</p>
      </div>
    `;

    feed.appendChild(container);
  });
});
