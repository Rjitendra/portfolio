import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

interface Project {
  name: string;
  client: string;
  tech: string;
  period: string;
  role: string;
  description: string;
  responsibilities: string[];
}

@Component({
  selector: 'ng-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  experiences: Experience[] = [
    {
      title: 'Technical Lead',
      company: 'Tata Consultancy Services (TCS)',
      location: 'Bhubaneswar',
      period: 'Sep 2021 – Present',
      highlights: [
        'Leading full-stack development of enterprise web applications using .NET Core and Angular',
        'Mentoring team members and conducting code reviews',
        'Working closely with clients for requirement analysis and solution design',
      ],
    },
    {
      title: 'Senior Software Developer',
      company: 'BridgeTree',
      location: 'Bangalore',
      period: 'Jan 2018 – Sep 2021',
      highlights: [
        'Developed scalable .NET Core applications with Angular front-end',
        'Contributed to architecture design and cloud platform delivery',
        'Improved performance and optimized SQL queries using Entity Framework and Dapper',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Trigent Software',
      location: 'Bangalore',
      period: 'Mar 2017 – Jan 2018',
      highlights: [
        'Developed scalable .NET Core applications with Angular front-end',
        'Created and maintained reusable Angular components',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Hexagon Global IT Services',
      location: 'Bangalore',
      period: 'Jul 2016 – Mar 2017',
      highlights: [
        'Involved in requirement gathering, design, coding, and unit testing',
        'Developed custom modules for clients using .NET and AngularJS',
      ],
    },
    {
      title: 'Software Developer',
      company: 'SKG Infosolutions Pvt Ltd',
      location: 'Hyderabad',
      period: 'Apr 2015 – Jul 2016',
      highlights: [
        'Developed internal tools and applications using ASP.NET MVC and SQL Server',
        'Provided maintenance and support for legacy applications',
      ],
    },
  ];

  projects: Project[] = [
    {
      name: 'AFP',
      client: 'Moody\'s Corporation',
      tech: 'Dot Net Core 7, Angular 16, VS-2023',
      period: 'July 2023 to Present',
      role: 'Tech Lead',
      description: 'The AFP project aims to help farmers get better elevator prices near their area. It allows producers to sell crops like soybeans at the best market prices.',
      responsibilities: ['Implementing new Components, services, directives', 'Creating endpoints', 'Fixed Defects'],
    },
    {
      name: 'OTT (API)',
      client: 'Thomson Reuters',
      tech: 'Dot Net Core, VS-2019',
      period: 'March 2023 to July 2023',
      role: 'Tech Lead',
      description: 'Implemented endpoints based on client demand which were then shared with different clients so that they could consume desired data.',
      responsibilities: ['Implementing endpoints', 'Fixed Defects'],
    },
    {
      name: 'OTT (Web)',
      client: 'Thomson Reuters',
      tech: 'JavaScript, jQuery, VB Script, VS-2013',
      period: 'Dec 2022 to March 2023',
      role: 'Tech Lead',
      description: 'Led a team of 4 developers in migrating VB Script to JavaScript within the Insurance Domain. Managed team of junior to senior developers, conducted code reviews, and ensured mobile-responsive design.',
      responsibilities: ['Migrate VBScript to JavaScript', 'Team leadership', 'Code reviews'],
    },
    {
      name: 'OSU (Web)',
      client: 'Thomson Reuters',
      tech: 'Angular 14, VS-2019',
      period: 'Sep 2021 to Dec 2022',
      role: 'Tech Lead',
      description: 'Led a team of 16 developers in migrating an AngularJS application to Angular 14 within the Insurance Domain. Designed project structure and implemented reusable common controls libraries.',
      responsibilities: ['Designing Angular controls', 'Team leadership', 'Architecture design'],
    },
    {
      name: 'AsurionRVS (Web)',
      client: 'Asurion',
      tech: 'C#, ASP.NET Core 3, Angular 10, SQL Server 2018',
      period: 'April 2019 to Present',
      role: 'Web Developer',
      description: 'Retail Validation System that validates records using business rules and handles fulfillment through Vision.',
      responsibilities: ['Designing User Interfaces', 'Entity Framework integration', 'Word document generation with Epplus'],
    },
    {
      name: 'NasAthletics (Web)',
      client: 'OneDataEntry',
      tech: 'C#, ASP.NET Core 2.2, Angular 8, SQL Server 2018',
      period: 'January 2018 to Present',
      role: 'Web Developer',
      description: 'Houses sports data for amateur sports and provides data to content providers such as Sports Engine.',
      responsibilities: ['Designing User Interfaces', 'Database integration', 'Data import/export automation'],
    },
    {
      name: 'Lead Manager Reporting Portal (AllState)',
      client: 'AllState',
      tech: 'C#, ASP.NET Core 2.2, Angular 8, SQL Server 2018',
      period: 'January 2018 to Present',
      role: 'Web Developer',
      description: 'Lead validation and reporting portal for the insurance domain.',
      responsibilities: ['Designing User Interfaces', 'Entity Framework integration', 'Document generation'],
    },
    {
      name: 'CCPA (WEB)',
      client: 'BridgeTree',
      tech: 'C#.NET, Razor, ASP.NET Core 3, SQL Server 2018',
      period: 'September 2019 to Present',
      role: 'Developer',
      description: 'CCPA Project for California users to request, view, delete and edit their information in BridgeTree Database.',
      responsibilities: ['Designing Razor UI', 'Database integration', 'User data management'],
    },
  ];
}
