"use strict";

(function (exports) {
  
  function Controller() {

    function listenFor(element, event, callBack) {
      console.log(element)
      element.addEventListener(event, function () {
        if (typeof callBack === "function") { callBack() }
      });
    }
    
    function getNote() {
      var text = document.getElementById('note_content').value
      return text
    }
    
    function addNote() {
      var note = getNote()
      if (!isEmpty(note)) {
        notebook.add(note)
        var notes = notebook.all()
        view.refresh(notes)
      }
    }
    
    function isEmpty(text) {
      if (text.trim() === "" || text === null) {
        return true
      }
    }
    
    listenFor(document.getElementById('create_button'), 'click', addNote);

  }

  exports.Controller = Controller;

})(this);

  
