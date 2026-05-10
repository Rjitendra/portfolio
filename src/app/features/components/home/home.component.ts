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

interface AITool {
  name: string;
  category: string;
  expertise: string[];
  useCases: string[];
  features?: string[];
}

interface AIExpertise {
  tools: AITool[];
  workflows: string[];
  capabilities: string[];
}

interface SkillCategory {
  category: string;
  icon?: string;
  skills: string[];
}

@Component({
  selector: 'ng-home',
  imports: [],
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
      client: "Moody's Corporation",
      tech: 'Dot Net Core 7, Angular 16, VS-2023',
      period: 'July 2023 to Present',
      role: 'Tech Lead',
      description:
        'The AFP project aims to help farmers get better elevator prices near their area. It allows producers to sell crops like soybeans at the best market prices.',
      responsibilities: [
        'Implementing new Components, services, directives',
        'Creating endpoints',
        'Fixed Defects',
      ],
    },
    {
      name: 'OTT (API)',
      client: 'Thomson Reuters',
      tech: 'Dot Net Core, VS-2019',
      period: 'March 2023 to July 2023',
      role: 'Tech Lead',
      description:
        'Implemented endpoints based on client demand which were then shared with different clients so that they could consume desired data.',
      responsibilities: ['Implementing endpoints', 'Fixed Defects'],
    },
    {
      name: 'OTT (Web)',
      client: 'Thomson Reuters',
      tech: 'JavaScript, jQuery, VB Script, VS-2013',
      period: 'Dec 2022 to March 2023',
      role: 'Tech Lead',
      description:
        'Led a team of 4 developers in migrating VB Script to JavaScript within the Insurance Domain. Managed team of junior to senior developers, conducted code reviews, and ensured mobile-responsive design.',
      responsibilities: ['Migrate VBScript to JavaScript', 'Team leadership', 'Code reviews'],
    },
    {
      name: 'OSU (Web)',
      client: 'Thomson Reuters',
      tech: 'Angular 14, VS-2019',
      period: 'Sep 2021 to Dec 2022',
      role: 'Tech Lead',
      description:
        'Led a team of 16 developers in migrating an AngularJS application to Angular 14 within the Insurance Domain. Designed project structure and implemented reusable common controls libraries.',
      responsibilities: ['Designing Angular controls', 'Team leadership', 'Architecture design'],
    },
    {
      name: 'AsurionRVS (Web)',
      client: 'Asurion',
      tech: 'C#, ASP.NET Core 3, Angular 10, SQL Server 2018',
      period: 'April 2019 to Present',
      role: 'Web Developer',
      description:
        'Retail Validation System that validates records using business rules and handles fulfillment through Vision.',
      responsibilities: [
        'Designing User Interfaces',
        'Entity Framework integration',
        'Word document generation with Epplus',
      ],
    },
    {
      name: 'NasAthletics (Web)',
      client: 'OneDataEntry',
      tech: 'C#, ASP.NET Core 2.2, Angular 8, SQL Server 2018',
      period: 'January 2018 to Present',
      role: 'Web Developer',
      description:
        'Houses sports data for amateur sports and provides data to content providers such as Sports Engine.',
      responsibilities: [
        'Designing User Interfaces',
        'Database integration',
        'Data import/export automation',
      ],
    },
    {
      name: 'Lead Manager Reporting Portal (AllState)',
      client: 'AllState',
      tech: 'C#, ASP.NET Core 2.2, Angular 8, SQL Server 2018',
      period: 'January 2018 to Present',
      role: 'Web Developer',
      description: 'Lead validation and reporting portal for the insurance domain.',
      responsibilities: [
        'Designing User Interfaces',
        'Entity Framework integration',
        'Document generation',
      ],
    },
    {
      name: 'CCPA (WEB)',
      client: 'BridgeTree',
      tech: 'C#.NET, Razor, ASP.NET Core 3, SQL Server 2018',
      period: 'September 2019 to Present',
      role: 'Developer',
      description:
        'CCPA Project for California users to request, view, delete and edit their information in BridgeTree Database.',
      responsibilities: ['Designing Razor UI', 'Database integration', 'User data management'],
    },
  ];

  aiExpertise: AIExpertise = {
    tools: [
      {
        name: 'Cursor AI',
        category: 'Advanced IDE with AI Integration',
        expertise: [
          'Multi-file context awareness and intelligent code generation',
          'Custom hooks for project-specific patterns and conventions',
          'Chat interface with repository understanding',
          'AI-assisted refactoring and code optimization',
          'Context-aware debugging and error resolution',
          'Workspace configuration for team collaboration',
        ],
        useCases: [
          'Rapid feature development with AI-assisted code generation',
          'Automated refactoring of legacy code using context awareness',
          'Documentation generation from code context',
          'Bug detection and intelligent debugging',
          'Performance optimization suggestions',
          'API integration and endpoint creation',
        ],
        features: [
          'Agent mode for autonomous task execution',
          'Custom instructions and skill definitions',
          'Multi-file editing with intelligent coordination',
          'Context protocol integration',
          'Real-time linting and suggestions',
        ],
      },
      {
        name: 'GitHub Copilot',
        category: 'AI Code Completion & Generation',
        expertise: [
          'Intelligent code completion with context understanding',
          'Full function and component generation from comments',
          'Test case generation and unit testing support',
          'Documentation and JSDoc generation',
          'Code review assistance and pattern recognition',
        ],
        useCases: [
          'Accelerating Angular component and service development',
          'Generating boilerplate code for .NET APIs',
          'Creating unit tests with test scenarios',
          'Implementing common design patterns',
          'Code modernization and deprecation handling',
        ],
        features: [
          'Chat with GitHub Copilot for contextual help',
          'Inline suggestions for improved productivity',
          'Support for multiple programming languages',
          'Integration with VS Code and JetBrains IDEs',
        ],
      },
      {
        name: 'OpenAI Codex',
        category: 'Code Generation API',
        expertise: [
          'API-based code generation for custom workflows',
          'Natural language to code translation',
          'Language translation (e.g., legacy code to modern frameworks)',
          'Complex algorithm implementation assistance',
          'Documentation and comment generation',
        ],
        useCases: [
          'Building custom code generation tools',
          'Batch processing code transformations',
          'VBScript to JavaScript modernization',
          'SQL query optimization and generation',
          'Algorithm development for complex business logic',
        ],
        features: [
          'Fine-tuning capabilities for specific domains',
          'Temperature and token customization',
          'Streaming responses for large outputs',
          'Support for 50+ programming languages',
        ],
      },
      {
        name: 'ChatGPT (Advanced)',
        category: 'Conversational AI & Analysis',
        expertise: [
          'Deep code review and architectural analysis',
          'Explaining complex algorithms and design patterns',
          'Debugging assistance and troubleshooting strategies',
          'Technical documentation and blog writing',
          'Performance optimization consulting',
          'Security vulnerability assessment',
        ],
        useCases: [
          'Code architecture review and recommendations',
          'Understanding third-party library implementations',
          'Performance bottleneck analysis',
          'Security best practices and compliance checking',
          'Technical knowledge base creation',
          'Team training material generation',
        ],
        features: [
          'Advanced reasoning for complex problems',
          'Multi-turn conversations for detailed discussions',
          'Code block analysis and suggestions',
          'Context retention across conversations',
        ],
      },
      {
        name: 'Model Context Protocol (MCP)',
        category: 'AI Tool Integration & Extension',
        expertise: [
          'Extending Cursor and other AI tools with custom capabilities',
          'Creating project-specific knowledge bases for AI tools',
          'Integration with external APIs and services',
          'Building custom tools and resources',
          'Enabling AI tools to access proprietary systems',
          'Standardized AI tool communication',
        ],
        useCases: [
          'Building MCP servers for Cursor knowledge integration',
          'Connecting AI tools to internal documentation systems',
          'Creating custom AI-powered development workflows',
          'Integrating business logic and APIs with AI assistants',
          'Building reusable AI tool extensions for teams',
          'Extending IDE capabilities with AI-powered features',
        ],
        features: [
          'Protocol-based architecture for standardization',
          'Support for resources, tools, and prompts',
          'Authentication and authorization handling',
          'Error handling and resilience',
          'Logging and monitoring capabilities',
        ],
      },
    ],
    workflows: [
      'AI-Assisted Code Review: Using ChatGPT for detailed code analysis before Copilot generates fixes',
      'Rapid Prototyping: Cursor for quick scaffolding, Copilot for implementation details',
      'Legacy Modernization: Codex API for batch transformations, Copilot for validation',
      'Documentation Pipeline: ChatGPT for structure planning, Copilot for code examples',
      'Performance Optimization: ChatGPT for analysis, Cursor Agent for implementation',
      'Architecture Design: ChatGPT for planning, Cursor for implementation with custom hooks',
      'Test Coverage: Copilot for test generation, ChatGPT for edge case analysis',
      'Security Auditing: ChatGPT for vulnerability assessment, Copilot for remediation',
    ],
    capabilities: [
      'End-to-end feature development from requirements to deployment',
      'Full-stack code generation for Angular components and .NET APIs',
      'Intelligent code refactoring and modernization',
      'Automated unit test and integration test generation',
      'Performance analysis and optimization',
      'Security vulnerability detection and remediation',
      'Technical documentation and knowledge base creation',
      'Architecture consulting and design pattern implementation',
      'Team knowledge transfer and mentoring support',
      'Custom workflow automation and tool integration',
    ],
  };

  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Technologies',
      icon: '🎨',
      skills: [
        'Angular 2+ to Angular 21',
        'TypeScript',
        'JavaScript (ES6+)',
        'RxJS',
        'Angular Material',
        'Angular CDK',
        'Angular Signals',
        'Standalone Components',
        'Reactive Forms',
        'NgRx State Management',
        'Nx Monorepo',
        'Storybook',
        'HTML5',
        'CSS3',
        'SCSS',
        'Bootstrap',
        'Responsive Web Design',
        'Progressive Web Applications (PWA)',
      ],
    },
    {
      category: 'Backend Technologies',
      icon: '⚙️',
      skills: [
        'C#',
        'ASP.NET MVC',
        'ASP.NET Core',
        '.NET Core 2.2 – 9',
        'REST API Development',
        'Web API',
        'Minimal APIs',
        'Entity Framework Core',
        'LINQ',
        'Dapper',
        'JWT Authentication',
        'OAuth2',
        'OpenID Connect (OIDC)',
        'Microservices Architecture',
      ],
    },
    {
      category: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        'Azure DevOps',
        'CI/CD Pipelines',
        'GitHub Actions',
        'Docker',
        'IIS Deployment',
        'NPM Package Publishing',
        'Git',
        'GitFlow',
      ],
    },
    {
      category: 'Database Technologies',
      icon: '🗄️',
      skills: [
        'SQL Server 2018+',
        'Stored Procedures',
        'Query Optimization',
        'Database Design',
        'Performance Tuning',
      ],
    },
    {
      category: 'AI & Productivity Tools',
      icon: '🤖',
      skills: [
        'Cursor AI',
        'GitHub Copilot',
        'OpenAI Codex',
        'ChatGPT',
        'AI-assisted Debugging & Refactoring',
        'AI-assisted Documentation Generation',
      ],
    },
    {
      category: 'Development Tools',
      icon: '🛠️',
      skills: [
        'Visual Studio 2019/2022/2023',
        'Visual Studio Code',
        'Postman',
        'Swagger',
        'Figma',
        'Jira',
      ],
    },
  ];
}
