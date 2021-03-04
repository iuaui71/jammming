class Spotify  {
    constructor(){
        this._token = '';
        this.expirationTime = 0;
        this.accounts_base_url = 'https://accounts.spotify.com/authorize?';
        this.client_id = 'client_id=2c96bb9bc4be4e5a945ce836e09f2bd4';
        this.response_type = '&response_type=token';
        this.redirect_uri = '&redirect_uri=http%3A%2F%2Flocalhost%3A3000';
        this.scope = '&scope=playlist-modify-public';
        this.state = '&state=q3lkrj08sudjh8M8yq3r';
    }
    getAccessToken(){
        if(this._token){
            return this._token;
        }
        else if ((window.location.href).match(/access_token=([^&]*)/)){
            //TODO: here we put the setting token and expiry variables
            let real = window.location.href;
            this._token = real.substring(
                real.lastIndexOf("access_token=") + 13,
		        real.lastIndexOf("&token_type")
            );
            this.expirationTime = real.substring(
                real.lastIndexOf("expires_in=") + 11,
                real.lastIndexOf("&state")
            );
            window.setTimeout(() => this._token = '', this.expirationTime * 1000);
            window.history.pushState('Access Token', null, '/');
            return this._token;
        }
        else {
            window.location = `${this.accounts_base_url}${this.client_id}${this.response_type}${this.redirect_uri}${this.scope}${this.state}`;
        }
    }
    search(term){
        let retval= [];
        let obj = {};
        let token = this.getAccessToken();

        fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
                {
                    headers : {Authorization: `Bearer ${token}`}
                }, 
        )
        .then(response => response.json())
        .then(data => {
            for(const item of data.tracks.items){
                obj = {id : item.id, name: item.name, artist: item.artists[0].name, album: item.album.name, uri: item.uri};
                retval.push(obj);
                obj = {};
            }
        })
        .catch(error => console.log(error.message));
            /*(tracks =>{
            obj = {id: tracks.id, name: tracks.name, artist: tracks.artist, album: tracks.artist[0].album, uri: tracks.uri};
            retval.push(obj);
            console.log(obj);
            obj = {};
            })
        );*/
        return retval;
    } 
}

export default Spotify;

