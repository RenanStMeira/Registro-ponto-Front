import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatDuration'})
export class FormatDurationPipe implements PipeTransform {
  transform(value: string): string {
    const match = value.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

    if (match) {
      const hours = match[1] ? match[1].slice(0, -1) : '0';
      const minutes = match[2] ? match[2].slice(0, -1) : '0';
      const seconds = match[3] ? match[3].slice(0, -1) : '0';

      return `${hours}h ${minutes}m ${seconds}s`;
    } else {
      return value;
    }
  }
}