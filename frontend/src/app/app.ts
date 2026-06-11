/*import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  private http = inject(HttpClient);

  chartData = [
    { name: '700', value: 700 },
    { name: '300', value: 300 },
    { name: '450', value: 450 },
    { name: '400', value: 400 },
    { name: '500', value: 500 },
  ];

  view: [number, number] = [800, 300];

  isGeneratingPdf = false;

  downloadPdf(): void {
    this.isGeneratingPdf = true;

    const currentUrl = window.location.href;
    console.log(`Sending print pipeline request to backend for: ${currentUrl}`);
    console.log('Calling API:', 'http://localhost:3000/api/generate-pdf');
    this.http
      .post(
        'http://localhost:3000/api/generate-pdf',
        {
          reportUrl: currentUrl,
          userName: 'Sakshi K',
        },
        { responseType: 'blob' },
      )
      .subscribe({
        next: (pdfBlob: Blob) => {
          const blob = new Blob([pdfBlob], { type: 'application/pdf' });
          const downloadUrl = window.URL.createObjectURL(blob);
          const link = document.createElement('a');

          link.href = downloadUrl;
          link.download = `BBSO-Safety-Report-${new Date().toISOString().split('T')[0]}.pdf`;

          document.body.appendChild(link);
          link.click();

          // Dynamic cleanup
          document.body.removeChild(link);
          window.URL.revokeObjectURL(downloadUrl);
          this.isGeneratingPdf = false;
        },
        error: (err) => {
          console.error('Playwright engine handoff communication failure:', err);
          this.isGeneratingPdf = false;
        },
      });
  }
}*/

import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {
  private http = inject(HttpClient);

  chartData = [
    { name: '700', value: 700 },
    { name: '300', value: 300 },
    { name: '450', value: 450 },
    { name: '400', value: 400 },
    { name: '500', value: 500 },
  ];

  view: [number, number] = [800, 300];

  isGeneratingPdf = false;

  downloadPdf(): void {
    this.isGeneratingPdf = true;

    const currentUrl = window.location.href;

    console.log('Sending URL:', currentUrl);

    this.http
      .post(
        'http://localhost:3000/api/generate-pdf',
        {
          reportUrl: currentUrl,
          userName: 'Sakshi K',
        },
        {
          responseType: 'blob',
        },
      )
      .subscribe({
        next: (response: Blob) => {
          const blob = new Blob([response], {
            type: 'application/pdf',
          });

          const url = window.URL.createObjectURL(blob);

          const a = document.createElement('a');
          a.href = url;
          a.download = 'report.pdf';

          document.body.appendChild(a);
          a.click();

          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);

          this.isGeneratingPdf = false;
        },

        error: (err) => {
          console.error('PDF Error:', err);
          this.isGeneratingPdf = false;
        },
      });
  }
}
