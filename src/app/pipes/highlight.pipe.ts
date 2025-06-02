import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true
})
export class HighlightPipe implements PipeTransform {
  transform(text: string, words: string[] = []): string {
    if (!text || !words.length) return text;

    const pattern = words
      .map(word => word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')) // Escape special characters for regex
      .join('|'); // Join words with OR operator (word1|word2|...)

    const regex = new RegExp(`(${pattern})`, 'gi'); // 'gi' for global and case-insensitive matching

    // Wrap matched words in a span with styling
    return text.replace(regex, `<span class="font-bold text-purple-300">$1</span>`);
  }
}
