import { Component, OnInit, ElementRef, EventEmitter, Output, Input, } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-tagger',
  templateUrl: './tagger.component.html',
  styleUrls: ['./tagger.component.css']
})
export class TaggerComponent implements OnInit {
  defaultWidth = 200;
  _tagText = '';
  placeholder = "";
  inputTags: string;
  inputWidth: number;
  TagArray: Array<string>;
  autocomplete: boolean = false;
  curElm: any;
  @Input() placeholderInput: string;
  @Output() sendTagData = new EventEmitter<string[]>();


  public get tagText(): string {
    return this._tagText;
  }

  public set tagText(tagText: string) {
    this._tagText = tagText;
    this.tagTextChange(tagText);
  }
  constructor(private elm: ElementRef) {
  }

  ngOnInit() {
    this.placeholder = this.placeholderInput;
  }

  ngAfterViewInit() {
    this.curElm = this.elm.nativeElement;
    var temp = $(this.curElm);
    var that = this;
    temp.bind("keydown", function (e) {
      var key;
      key = e.which;
      if (key === 9 || key === 13) {
        e.preventDefault();
      }
      if (key === 8) {
        return that.deleteTag(undefined);
      }
    });
    temp.bind("keyup", function (e) {
      var key;
      key = e.which;
      if (key === 9 || key === 13 || key === 188) {
        e.preventDefault();
        return that.addTag();
      }
    });

  }

  tagArray() {
    if (this.inputTags == undefined) {
      return [];
    }
    return this.inputTags.split(',').filter((tag, index, arr) => {
      return tag !== "";
    });
  };
  addTag() {
    var tagArray;
    if (this.tagText.length === 0) {
      return;
    }
    tagArray = this.tagArray();
    if ($.inArray(this.tagText, tagArray) == -1) {
      tagArray.push(this.tagText);
    }

    this.inputTags = tagArray.join(',');
    this.tagText = "";
    this.TagArray=tagArray;
    this.emitDataToAllParent();
    return this.tagText;

  };
  deleteTag(key: any) {

    var tagArray;
    tagArray = this.tagArray();
    if (tagArray.length > 0 && this.tagText.length === 0 && key === undefined) {
      tagArray.pop();
    }
    else {
      if (key !== undefined) {
        tagArray.splice(key, 1);
      }
    }
    this.inputTags = tagArray.join(',');
    this.TagArray=tagArray;
    this.emitDataToAllParent();
    return this.inputTags;
  };

  deleteAllTags() {
    this.inputTags = "";
    this.emitDataToAllParent();
    return this.inputTags;
  };

  emitDataToAllParent() {
    this.sendTagData.emit(this.tagArray());
  };


  tagTextChange(val) {
    var tempEl: any;
    if (!(val === undefined)) {
      tempEl = $("<span>" + val + "</span>").appendTo("body");
      this.inputWidth = tempEl.width() + 5;
      if (this.inputWidth < this.defaultWidth) {
        this.inputWidth = this.defaultWidth;
      }
      return tempEl.remove();
    }
  };





}
