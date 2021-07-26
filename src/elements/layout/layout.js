// WARN Need to finish documentation and stuffs
class EclairHStack extends EclairView {
    constructor(func) {
        super(func)
        this
            .display("flex")
            .flexDirection("row")
            .alignItems("center")
        this.css("justify-content: space-around;")
        
        // Need to remove view as given by parent
        this.removeStyle(eclair.styles.View)
        this.addStyle(eclair.styles.HStack)
    }
    
    /// INCLUDE elements.layout.view.addChild eclair.HStack()
    /// INCLUDE elements.layout.vstack.alignment eclair.HStack()
    
    alignment(_alignment) {
        if (_alignment instanceof EclairState) {
            _alignment.addCallback(this.id() + "-alignment", function(state) {
                this._setAlignment(state.value())
            }, true)
        } else {
            this._setAlignment(_alignment)
        }
        return this
    }
    
    _setAlignment(_alignment) {
        if (_alignment == "start") {
            this.alignItems("flex-start")
        } 
        else if (_alignment == "center") {
            this.alignItems("center")
        }
        else if (_alignment == "end") {
            this.alignItems("flex-end")
        }
        else if (_alignment == "stretch") {
            this.alignItems("stretch")
        } else {
            throw "Unknown alignment"
        }
    }
}