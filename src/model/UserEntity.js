export default class UserEntity {

    _userName = "";
    _accesToken = "";
    _imageAvatar = "";
    _userId = 0;
    _userInfoId = '';

    constructor(obj) {
        this._accesToken = obj.result.accessToken;
        this._userId = obj.result.userId;
        this._userInfoId = obj.result.userInfoId;
    }
}