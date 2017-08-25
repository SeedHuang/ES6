class Body {
        constructor(message) {
                this.message = message;
        }
        toString() {
                return `<div class="body">${this.message}</div>`;
        }
}

export default Body;
