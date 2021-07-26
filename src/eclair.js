//PRINT TODO Add events to callbacks (mousemove position etc)
//PRINT TODO Prevent layered on click events
//PRINT TODO Hide show elements
//PRINT TODO Superscript/Subscript text
//PRINT TODO Implement these: https://getbootstrap.com/docs/4.0/components/progress/
//PRINT Add string html to views
//PRINT Add margin, paddding, border: left, top, right bottom
//PRINT Add deleting element
//PRINT Add spinner
//PRINT Add upload icon
//PRINT Add callback getters when accessing child element.
//PRINT TODO Add default styles to everything
// PRINT Layout objects have no shared style
// PRINT MAKE SURE ALL OBJECTS HAVE PARENT ACCOCIATION
// PRINT when building doc, clear current folder

// When creating a new element make sure
//  - Links to children objects
//  - Default styles

/// # Eclair
/// The `eclair` object allows you to easily construct an eclair object and interact in the Eclair development kit.
let eclair = {
    _ids: 0,
    _elements: {},
    _newID: function() {this._ids += 1; return this._ids - 1;},
    
    // Styling
    Style: function() {return new EclairStyleComponent();},
    
    // State based 
    State: function(_val) {return new EclairState(_val);},    
    Color: function(_col) {return new EclairColour(_col);},
    TextStyle: function() {return new EclairTextStyleState();},
    Alignment: function() {return new EclairAlignmentState();},
    
    // Layout 
    View: function(_func) {return new EclairView(_func);},
//    ScrollView: function(elements) {return new EclairScrollView(elements);},
    VStack: function(_func) {return new EclairVStack(_func);},
    HStack: function(_func) {return new EclairHStack(_func);},
    
    Button: function(text) {return new EclairButton(text);},
    Form: function(elements) {return new EclairForm(elements);},
    Image: function() {return new EclairImage();},
    Text: function(text) {return new EclairText(text);},
    
    TextBox: function(text) {return new EclairTextBox(text);},
    TextArea: function() {return new EclairTextArea();},
    IFrame: function() {return new EclairIFrame();},
    Select: function() {return new EclairSelect();},
    Link: function(text) {return new EclairLink(text);},
    Slider: function(_value) {return new EclairSlider(_value);},
    HiddenInput: function(_value) {return new EclairHiddenInput(_value);},
    Toggle: function(_value) {return new EclairToggle(_value);},
    HorizontalLine: function() {return new EclairHorizontalLine();},
    CustomTagComponent: function(tag) {return new EclairCustomTagComponent(tag);},
    SyntaxHighlighter: function() {return new EclairSyntaxHighlighter();},
    RadioButtons: function() {return new EclairRadioButtons();},
    CheckBox: function(text) {return new EclairCheckbox(text);},
    
    ProgressBar: function(_progress) {return new EclairProgressBar(_progress);},
    Alert: function(_value) {return new EclairAlertBox(_value);},
    
    performCallback: function(eID, event, param1) {this._elements[eID].performCallback(event, param1);},
    
    theme: {
        "accent": "#ee8800",
        "font": '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    }
}
