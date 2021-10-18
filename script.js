var vid = document.getElementsByClassName("video");
[].forEach.call(vid, function (item) {
    item.addEventListener('mouseover', hoverVideo, false);
    item.addEventListener('mouseout', pauseVideo, false);
});

function hoverVideo(e)
{   
    this.play();
}
function pauseVideo(e)
{
    this.pause();
}