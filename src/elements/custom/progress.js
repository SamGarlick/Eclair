// PRINT eclair progress bar doc not finished.

class EclairProgressBar extends EclairComponent {
    constructor(_progress) {
        super()
        
        this._labelText = eclair.State("0%")
        this._label = eclair.Text(this._labelText)
            .addStyle(eclair.styles.ProgressBarLabel)
        
        this._indicator = eclair.HStack([this._label])
            .margin(null)  // Overrides default HBox Margin
            .addStyle(eclair.styles.ProgressBarIndicator)
        
        // Add callback for progress changing state
        this.progress = _progress
        if (_progress instanceof EclairState) {
            let self = this
            _progress.addCallback(this.id() + "-progress", function(state) {
                _progress = Math.max(Math.min(state.value(), 1), 0)
                self._progress = _progress;
                self._labelText.value(Math.round(_progress * 100) + "%")
                self._indicator.width((_progress * 100 + 0.0001) + "%")
            }, true)
        }
        
        // Configure parent/children relation. Note label is a child of the inidicator so that sets the parent/child.
        this._indicator.parent = this
        this.children = [this._indicator]
        
        this.addStyle(eclair.styles.ProgressBar)
    }
    
    striped(_on) {
        if (_on instanceof EclairState) {
            let self = this
            _on.addCallback(this.id() + "-color", function(state) {
                if (state.value()) {
                    self._indicator.getStyleSheet()["background-image"] = "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)";
                    self._indicator.getStyleSheet()["background-size"] = "1rem 1rem;";
                } else {
                    self._indicator.getStyleSheet()["background-image"] = "";
                    self._indicator.getStyleSheet()["background-size"] = "1rem 1rem;";
                }
                self._indicator.updateCSSStyle()
            }, true)
        } else {
            if (_on) {
                this._indicator.getStyleSheet()["background-image"] = "linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)";
                this._indicator.getStyleSheet()["background-size"] = "1rem 1rem;";
            } else {
                this._indicator.getStyleSheet()["background-image"] = "";
                this._indicator.getStyleSheet()["background-size"] = "1rem 1rem;";
            }
            this._indicator.updateCSSStyle()
        }
        
        return this;
    }
    
    // DOC func indicator 
    // This function allows you to access the progress bar's indicator via a callback. 
    // ARG callback
    indicator(callback) {
        callback(this._indicator)
        return this;
    }
    
    label(callback) {
        callback(this._label)
        return this;
    }
        
    /// ### .color
    /// Sets the colour of the progress bar.  
    /// **args**:
    /// - _color: Can be either a string, an eclair State or eclair Color. 
    /// ```javascript
    /// eclair.ProgressBar(0.5)
    ///     .color("red")
    /// ```
    color(_color) {
        this._indicator.backgroundColor(_color)
        return this
    }
    
    /// ### .showLabel
    /// Sets whether the progress label should show on the progress bar.  
    /// **args**:
    /// - _show: Can be either a bool or an eclair State.
    /// ```javascript
    /// eclair.ProgressBar(0.5)
    ///     .showLabel(true)
    /// ```
    showLabel(_show) {
        if (_show instanceof EclairState) {
            let self = this
            _show.addCallback(this.id() + "-label", function(state) {
                self._label.opacity(state.bool()? "1":"0")
            }, true)
        } else {
            this._label.opacity(_show? "1":"0")
        }
        
        return this
    }
    
    // Standard element. No documentation needed.
    build() {
        return `<div>${this._indicator.compile()}</div>`
    }
}