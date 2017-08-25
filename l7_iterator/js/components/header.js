class Header {
        constructor(headMessage) {
                this.headMessage = headMessage;
        }
        toString() {
                return `<header>${this.headMessage}</header>`
        }
}


export default Header;
