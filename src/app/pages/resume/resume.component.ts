import { Component } from '@angular/core';
import { slideDownUp } from 'src/app/animation/animations';
import { Resume } from 'src/app/models/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
  animations: [slideDownUp],
})
export class ResumeComponent {
  eduArr: Resume[] = [
    {
      name: 'computer Engineering',
      platform: {
        name: 'al-safwa high institute of engineering',
        link: 'https://alsafwa.edu.eg/',
      },
      description: `Bachelor's degree in Computer Engineering from Al-Safwa High Institute Of Engineering - Egypt`,
      period: '07/2019 - 07/2024',
    },
    {
      name: 'web development diploma',
      platform: {
        name: 'route academy',
        link: 'https://www.linkedin.com/company/routeacademy/',
      },
      description: `Web Development Diploma with full-stack content Frontend & Backend from Route academy - Egypt`,
      period: '09/2020 - 05/2021',
    },
  ];

  workArr: Resume[] = [
    {
      name: 'jr. software engineer',
      platform: {
        name: 'evold',
        link: 'https://www.evold.co/',
      },
      description: 'Details Coming Soon...',
      period: '02/2023 - present',
    },
    {
      name: 'full stack web developer',
      platform: {
        name: 'upwork',
        link: 'https://www.upwork.com/freelancers/~01efe5bc7f74e40fa0',
      },
      description:
        'developing highly interactive web applications utilizing HTML, CSS, JavaScript, Angular, and integrating with Restful APIs, with little experience in backend development',
      period: '2020 - present',
    },
    {
      name: 'jr. frontend developer',
      platform: {
        name: 'Foodpoint',
        link: 'https://www.linkedin.com/company/foodpointpos/',
      },
      description: `working in the main company product FoodPoint dashboard using
      Angular framework.`,
      period: '07/2022 - 01/2023',
    },
    {
      name: 'frontend developer',
      platform: {
        name: 'codeikoo',
        link: 'https://www.codeikoo.com/home',
      },
      description: `built 3 web apps with Angular and Bootstrap and made
      it with languages Arabic, English, and French.`,
      period: '02/2022 - 06/2022',
    },
    {
      name: 'frontend mentor',
      platform: {
        name: 'route academy',
        link: 'https://www.linkedin.com/company/routeacademy/',
      },
      description:
        'I worked as a Mentor in frontend development at Route Academy Alexandria Branch',
      period: '09/2021 - 03/2022',
    },
  ];
}
