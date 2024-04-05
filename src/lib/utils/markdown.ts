import type { marked } from 'marked';

export const SparklesHighlightTokenizerExtension: marked.TokenizerAndRendererExtension = {
  name: 'sparklesHighlight',
  level: 'inline',
  start(src: string) {
    return src.indexOf('@@');
  },
  tokenizer(src: string) {
    const rule = /^\@\@(.*?)\@\@/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'sparklesHighlight',
        raw: match[0],
        text: match[1],
        color: 'secondary'
      };
    }
  },
  renderer(token) {
    return `<span>${token.text}</span>`;
  }
};

export const MarkerHighlightTokenizerExtension: marked.TokenizerAndRendererExtension = {
  name: 'markerHighlight',
  level: 'inline',
  start(src: string) {
    return src.indexOf('==');
  },
  tokenizer(src: string) {
    const rule = /^\=\=(.*?)\=\=/;
    const match = rule.exec(src);
    if (match) {
      return {
        type: 'markerHighlight',
        raw: match[0],
        text: match[1]
      };
    }
  },
  renderer(token) {
    return `<span>${token.text}</span>`;
  }
};
