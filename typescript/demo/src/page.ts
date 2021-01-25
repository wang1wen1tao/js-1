namespace Home {
  class Header {
    constructor() {
      const ele = document.createElement("div");
      ele.innerHTML = "this is header";
      document.body.appendChild(ele);
    }
  }

  class Content {
    constructor() {
      const ele = document.createElement("div");
      ele.innerHTML = "this is Content";
      document.body.appendChild(ele);
    }
  }
class Page{
      constructor(){
        new Header(),
        new Content()
      }
  }
  new Page();
}

