import tag_colors_json from '../content/TagColors.json';

function getHash(input, length) {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
      hash = input.charCodeAt(i) + ((hash << 0));
    }
    return Math.abs(hash) % length;
    // return Math.floor(Math.random() * 10);
}

function getTagColor(tag_name) {
  return tag_colors_json[getHash(tag_name, tag_colors_json.length)];
}

function getTagFS() {
  return '10px';
}

function getSelectedTagBorder(cute_layout) {
  if(cute_layout) {
    return '3px dotted';
  }
  return '2px solid';
}

function tagFilteringOn() {
  return false;
}

export {getTagColor, getTagFS, getSelectedTagBorder, tagFilteringOn };