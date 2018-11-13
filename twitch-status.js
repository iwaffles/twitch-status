function checkTwitchStatus(userLogin, element) {
    let url = `https://api.twitch.tv/helix/streams?user_login=${userLogin}`;
    let clientID = 'YOUR_TWITCH_CLIENT_ID';
    let options = {
        headers: {
            "Client-ID": clientID
        }
    };

    fetch(url, options).then(response => {
        return response.json();
    }).then(twitchJSON => {
        // console.log(JSON.stringify(twitchJSON));
        if (twitchJSON.data.length > 0) {
            showIndicator(element, twitchJSON.data[0].title);
        } else {
            hideIndicator(element);
        }
    });
}

function showIndicator(element, title = 'Live Coding on Twitch!') {
    element.style.display = 'flex';
    element.querySelector('.title').innerHTML = title;
}

function hideIndicator(element) {
    element.style.display = 'none';
}


window.onload = function() {
    let element = document.querySelector('.live_status');
    checkTwitchStatus('iWaffles', element);
}