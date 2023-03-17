class LiveTimer extends HTMLElement {

    render() {
        this.innerHTML = `<time-formatted id="elems" hour="numeric" minute="numeric" second="numeric"></time-formatted>`
        this.timerElem = this.firstElementChild;
    }

    update() {
        this.date = new Date();
        this.timerElem.setAttribute('datetime', this.date);
        this.dispatchEvent(new CustomEvent("tick", {
            detail: this.date
        }));
    }

    connectedCallback() {
        if(!this.rendered) {
            this.render();
            this.rendered = true;
        }
        this.timer = setInterval(() => this.update(),1000)
    }

    disconnectedCallback () {
        clearInterval(this.timer);
    }

}

customElements.define("live-timer", LiveTimer);