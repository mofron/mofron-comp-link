/**
 * @file mofron-comp-linktxt/index.js
 * @brief link text component for mofron
 *        jump to url when text clicked.
 * @license MIT
 */
const Text = require("mofron-comp-text");
const Link = require("mofron-event-link");

module.exports = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) text parameter
     *                key-value: component config
     * @param (string) url parameter
     * @short text,url
     * @type private
     */
    constructor (p1, p2) {
        try {
            super();
            this.modname("Link");
            this.shortForm("text", "url");
            
	    /* set config */
	    if (0 < arguments.length) {
                this.config(p1, p2);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts () {
        try {
	    super.initDomConts();
	    let pvt = { private:true };
            this.event(new Link({ tag: "Link" }), pvt);
            this.mainColor("#0073bb", pvt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * link url
     *
     * @param (string) link url
     * @param (boolean) true: jump to url on new tab
     *                  false: jump to url on current tab
     * @type parameter
     */
    url (prm, flg) {
        try {
	    let tgt = { modname: "Link", tag: "Link" };
	    return this.event(tgt).url(prm, flg);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
