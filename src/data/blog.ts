import { BlogPost } from '@/types'

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-reusable-angular-components-in-enterprise-apps',
    title: 'Building Reusable Angular Components in Enterprise Apps',
    category: 'Angular',
    date: '2026-08-01',
    readingTime: '6 min read',
    summary:
      'Practical notes from working on reusable Angular components across multiple modules of an enterprise logistics platform.',
    content: `## Why reusable components matter

While working on enterprise Angular applications, I found that reusable components become important as the number of business modules grows.

In a large application, similar UI patterns can appear across modules such as Trip, Sites, Routes, Driver, Documents, Reports and Dashboards.

Instead of implementing the same UI behaviour repeatedly, reusable components help keep the application consistent and easier to maintain.

## What I focused on

I worked with Angular and TypeScript to build and maintain reusable frontend components across different business workflows.

The goal was not only to make the UI work, but also to make the components reusable across similar screens.

## Working with API-driven modules

Enterprise modules usually depend heavily on backend APIs.

The frontend needs to handle loading states, API responses, forms, tables and user actions without making every module behave differently.

Keeping common patterns reusable helped reduce duplicated frontend logic.

## What I learned

Working on production modules changed how I think about components.

A component should not only solve the current screen. It should be structured so that similar requirements can be handled without rebuilding everything from scratch.

That approach becomes especially useful when working across a large enterprise application.`,
  },

  {
    slug: 'working-with-react-and-nextjs-in-production-projects',
    title: 'Working with React and Next.js in Production Projects',
    category: 'React / Next.js',
    date: '2026-07-20',
    readingTime: '5 min read',
    summary:
      'Practical notes from building production frontend workflows with React.js, Next.js, TypeScript and Tailwind CSS.',
    content: `## Moving between Angular and React

Working with both Angular and React helped me understand different approaches to building frontend applications.

My React.js work involved production dashboards, administration interfaces and application workflows, while Next.js was used for the Backpacker tour booking CMS.

## Building reusable React components

Reusable components were important when working on multiple screens with similar UI patterns.

Instead of creating separate implementations for every screen, I focused on keeping common UI behaviour reusable.

TypeScript also helped keep component props and application data more predictable.

## Working with Next.js

In the Backpacker project, I worked with React.js, Next.js, TypeScript and Tailwind CSS to build CMS interfaces for tours, destinations, packages, blogs and itineraries.

The main focus was creating responsive and maintainable frontend workflows.

## What I learned

Working across Angular, React and Next.js made me more comfortable adapting to different frontend architectures.

The framework changes, but concepts such as component reusability, API integration, responsive UI and maintainable code remain important.`,
  },

  {
    slug: 'rest-api-integration-from-ui-to-production',
    title: 'REST API Integration: From UI to Production',
    category: 'API Integration',
    date: '2026-07-10',
    readingTime: '5 min read',
    summary:
      'Practical frontend notes on integrating REST APIs and connecting real application workflows with backend data.',
    content: `## Frontend applications are API-driven

Most of the production applications I have worked on depend heavily on REST APIs.

The frontend is responsible for turning API data into usable screens, forms, tables, dashboards and workflows.

## Handling API-driven workflows

In enterprise applications, API integration is not limited to fetching data.

A typical workflow can involve loading data, submitting forms, updating records, handling errors and refreshing related information.

This means the frontend needs a consistent approach to API calls and UI states.

## React projects

In React-based applications, I worked with Axios for API communication and React Query for server-state management.

Separating server state from local UI state made larger workflows easier to reason about.

## Angular projects

In Angular applications, REST API integration was part of multiple business modules.

The same principle applied: keep API-driven workflows predictable and make the UI respond correctly to loading, success and error states.

## What I learned

Good API integration is not only about making a request successfully.

The frontend should clearly represent the state of the request and keep the user workflow predictable.`,
  },

  {
    slug: 'react-query-and-server-state-management',
    title: 'Why Server State Needs Different Thinking in React',
    category: 'React / Next.js',
    date: '2026-06-25',
    readingTime: '5 min read',
    summary:
      'Practical notes on using React Query to manage API-driven server state in React applications.',
    content: `## Client state and server state are different

One thing I learned while working with React applications is that UI state and server state should not always be handled in the same way.

UI state can represent things such as an opened modal, selected tab or input value.

Server state represents data coming from APIs and can become stale or need to be refreshed.

## Using React Query

In the FireXch project, React Query was used for managing API-driven server state.

This helped keep data fetching and server-state behaviour separate from individual UI components.

## Combining React Query with Axios

Axios handled API communication while React Query handled the server-state layer.

This separation made the frontend code easier to structure around actual application workflows.

## Real-time data

The project also involved WebSocket-based real-time updates.

This introduced another requirement: the UI sometimes needs to reflect data changes without waiting for a normal request cycle.

## What I learned

State management becomes easier when the type of state is clear.

Not every piece of application data needs to be treated as local component state.`,
  },

  {
    slug: 'frontend-debugging-production-issues',
    title: 'What Production Bugs Taught Me About Frontend Development',
    category: 'Frontend',
    date: '2026-06-15',
    readingTime: '5 min read',
    summary:
      'Practical lessons from debugging real frontend issues across enterprise Angular and React applications.',
    content: `## Production development is different

A feature can work perfectly during development and still fail in a real production workflow.

Working on production applications taught me that debugging is a major part of frontend development.

## Start from the actual flow

When debugging an issue, I try to understand the complete flow first.

That includes the user action, component behaviour, API request, response data and final UI state.

Looking at only the visible error can sometimes hide the actual cause.

## API and UI issues

Many frontend problems are connected to the interaction between UI and API data.

A component may expect one data structure while the API returns another, or a UI state may not be updated after an operation.

Understanding the complete request-to-render flow makes these issues easier to identify.

## What I learned

Debugging improved my understanding of how frontend applications actually work.

Instead of immediately changing code, I learned to reproduce the issue, identify where the flow breaks and then fix the actual cause.`,
  },

  {
    slug: 'frontend-interview-preparation-from-production-experience',
    title: 'Preparing for Frontend Interviews with Production Experience',
    category: 'Career & Interviews',
    date: '2026-06-05',
    readingTime: '6 min read',
    summary:
      'How working on real Angular and React projects changed the way I prepare for frontend interviews.',
    content: `## Theory is only one part

Frontend interview preparation becomes more useful when concepts can be connected to real project experience.

Instead of only memorizing definitions, I try to understand where a concept was actually used.

## Angular experience

Working with Angular enterprise applications gave me practical exposure to components, TypeScript, RxJS, REST APIs, reusable UI and large business modules.

These experiences make technical questions easier to understand because they are connected to actual development work.

## React experience

My React work involved reusable components, TypeScript, Tailwind CSS, Axios, React Query and WebSocket-based workflows.

Preparing for interviews around these technologies means understanding why each tool was used, not only what it does.

## Project-based preparation

I find scenario-based questions particularly useful.

For example:

How would you structure a reusable component?

How would you handle API loading and error states?

When would you use server-state management?

How would you debug a production issue?

These questions are closer to real frontend development.

## What I learned

Real project experience gives interview preparation more context.

The goal is not to remember every API from a framework, but to understand the decisions behind the code.`,
  },
  {
    slug: 'working-with-trip-management-in-angular',
    title: 'Working with Trip Management in Angular',
    category: 'Angular',
    date: '2026-06-01',
    readingTime: '5 min read',
    summary:
      'Practical notes from working on trip-related frontend workflows inside an enterprise logistics application.',
    content: `## The module

Trip management was one of the business areas I worked with while developing the XSwift logistics platform.

The frontend had to represent operational data through structured screens and user workflows.

## Building the UI

My work involved Angular and TypeScript for creating and maintaining frontend interfaces.

Reusable UI patterns were important because different parts of the application followed similar interaction patterns.

## Working with data

Trip screens depend on backend data, so API integration was an important part of the workflow.

The frontend needed to display the received information correctly and allow users to perform the required actions.

## What I learned

Working on a business-heavy module helped me understand that frontend development is not only about building screens.

Understanding the workflow behind the screen is equally important.`
  },

  {
    slug: 'building-route-management-interfaces',
    title: 'Building Route Management Interfaces',
    category: 'Angular',
    date: '2026-05-28',
    readingTime: '5 min read',
    summary:
      'Lessons from working on route-related interfaces and API-driven workflows in an enterprise logistics platform.',
    content: `## Route management

Route-related workflows are an important part of a logistics application.

The frontend needs to present operational information clearly while keeping different actions easy to understand.

## My frontend work

I worked with Angular and TypeScript to build and maintain interfaces for business workflows.

API integration connected the frontend screens with backend data.

## Reusable patterns

Working across multiple modules made reusable components especially useful.

Common tables, forms and UI patterns could follow consistent behaviour instead of being implemented differently in every module.

## What I learned

Enterprise frontend development requires consistency.

A screen should fit into the larger application instead of behaving like an isolated feature.`
  },

  {
    slug: 'working-with-sites-management',
    title: 'Working with Sites Management in an Enterprise App',
    category: 'Angular',
    date: '2026-05-25',
    readingTime: '4 min read',
    summary:
      'Practical notes from building and maintaining frontend workflows around sites and operational data.',
    content: `## Why sites matter

Sites are part of the operational data used within logistics workflows.

The frontend needs to make that information available through clear and usable interfaces.

## Frontend implementation

I worked with Angular and TypeScript to maintain the related screens and integrate them with backend APIs.

The work involved handling application data and user interactions through reusable frontend patterns.

## Keeping the interface consistent

Since the platform contains many business modules, consistency between screens is important.

Reusable components and common UI patterns help reduce unnecessary differences.

## What I learned

Working on operational modules improved my understanding of how business data moves through an enterprise application.`
  },

  {
    slug: 'building-driver-management-workflows',
    title: 'Building Driver Management Workflows',
    category: 'Angular',
    date: '2026-05-22',
    readingTime: '4 min read',
    summary:
      'Practical lessons from working on driver-related frontend workflows in a logistics platform.',
    content: `## The workflow

Driver management is another operational area within the logistics platform.

The frontend provides interfaces for working with driver-related information and actions.

## My role

I worked on Angular frontend modules and connected the UI with REST APIs.

Reusable components helped keep common interface patterns consistent.

## Production considerations

The application was already a production-focused enterprise system, so changes needed to fit into existing workflows.

This required understanding existing components and patterns before making changes.

## What I learned

Working inside an existing application teaches a different skill from starting a project from scratch.

You need to understand the existing architecture before introducing changes.`
  },

  {
    slug: 'working-with-device-inventory',
    title: 'Working with Device Inventory Interfaces',
    category: 'Angular',
    date: '2026-05-19',
    readingTime: '4 min read',
    summary:
      'Notes from working on device inventory workflows inside the XSwift logistics platform.',
    content: `## Device inventory

Device Inventory is one of the business modules I worked with in the XSwift platform.

The module deals with operational device information through frontend workflows.

## Frontend work

I worked with Angular, TypeScript and REST APIs while maintaining the application interfaces.

The UI needed to consume backend data and present it through consistent enterprise patterns.

## Reusable UI

Because similar patterns existed across the application, reusable components were useful for keeping the interface consistent.

## What I learned

Working on multiple modules helped me see how shared frontend patterns can reduce repeated implementation work.`
  },

  {
    slug: 'fuel-and-maintenance-frontend-work',
    title: 'Working on Fuel and Maintenance Workflows',
    category: 'Angular',
    date: '2026-05-16',
    readingTime: '5 min read',
    summary:
      'Practical notes from working on fuel and maintenance-related frontend workflows in logistics software.',
    content: `## The business workflow

Fuel and Maintenance is part of the operational functionality of the logistics platform.

The frontend needs to represent business information in a way that users can work with efficiently.

## My contribution

I worked with Angular and TypeScript on the frontend implementation and API-driven workflows.

The application used reusable components and established UI patterns across modules.

## Working inside an existing system

One important part of enterprise development is following the existing structure.

Instead of creating a completely different approach for each feature, I worked within the application's existing patterns.

## What I learned

Consistency is a major part of maintainable enterprise frontend development.`
  },

  {
    slug: 'building-document-management-ui',
    title: 'Building Document Management Interfaces',
    category: 'Angular',
    date: '2026-05-13',
    readingTime: '5 min read',
    summary:
      'Lessons from working on document-related frontend workflows in an enterprise logistics platform.',
    content: `## Documents in enterprise workflows

Document-related functionality is part of the larger operational workflow of XSwift.

The frontend needs to provide users with structured ways to work with document information.

## My frontend work

I worked on Angular interfaces and API-driven workflows connected to the backend.

Reusable UI patterns helped keep the screens aligned with the rest of the application.

## Why consistency matters

Enterprise applications often contain many screens that look different but follow similar interaction patterns.

Recognizing those patterns makes it easier to create reusable components.

## What I learned

Reusable frontend architecture becomes more valuable as the number of business modules increases.`
  },

  {
    slug: 'working-with-epod-and-challan-workflows',
    title: 'Working with ePOD and Challan Workflows',
    category: 'Angular',
    date: '2026-05-10',
    readingTime: '5 min read',
    summary:
      'Practical notes from working with ePOD and Challan-related frontend workflows in logistics software.',
    content: `## Operational workflows

ePOD and Challan are part of the transportation workflows supported by the platform.

The frontend provides interfaces around these business processes.

## My role

I worked with Angular and TypeScript to build and maintain frontend functionality.

REST APIs connected the application interface with backend business data.

## Keeping workflows consistent

Since these modules exist alongside many other operational modules, common UI patterns were important.

The goal was to maintain the same overall application experience.

## What I learned

Understanding the business workflow before implementing UI makes frontend development more effective.`
  },

  {
    slug: 'building-logistics-dashboards-with-angular',
    title: 'Building Logistics Dashboards with Angular',
    category: 'Angular',
    date: '2026-05-07',
    readingTime: '5 min read',
    summary:
      'Practical notes from working on dashboard interfaces for an enterprise logistics platform.',
    content: `## Dashboards

Dashboards bring operational information together in a single interface.

In the XSwift platform, dashboards were part of the wider logistics and fleet-management application.

## Frontend implementation

I worked with Angular and TypeScript to maintain dashboard-related frontend workflows.

The interface depended on API-driven data and needed to fit into the existing application structure.

## Keeping information usable

Data-heavy enterprise interfaces need clear structure.

The frontend should make the information understandable without making the screen unnecessarily complicated.

## What I learned

Good dashboard development requires both frontend implementation and an understanding of what information users actually need.`
  },

  {
    slug: 'working-with-trip-and-safety-reports',
    title: 'Working with Trip and Safety Reports',
    category: 'Angular',
    date: '2026-05-04',
    readingTime: '5 min read',
    summary:
      'Lessons from working on reporting interfaces within an enterprise logistics application.',
    content: `## Reporting workflows

Reports are an important part of enterprise applications because they turn operational data into usable information.

I worked with Trip Reports and Safety Reports within the XSwift platform.

## Frontend work

The interfaces were built and maintained using Angular and TypeScript.

REST APIs supplied the data required by the frontend workflows.

## Data-heavy screens

Reporting screens often contain more information than standard CRUD interfaces.

This makes consistent tables, filters and UI patterns important.

## What I learned

Working with reports improved my understanding of how frontend applications present large amounts of business data.`
  },

  {
    slug: 'working-with-control-tower-and-score-card',
    title: 'Working with Control Tower and Score Card Modules',
    category: 'Angular',
    date: '2026-05-01',
    readingTime: '5 min read',
    summary:
      'Practical notes from working on operational monitoring and score-related frontend modules.',
    content: `## Business monitoring

Control Tower and Score Card are part of the wider reporting and operational functionality of XSwift.

The frontend presents information that supports business monitoring workflows.

## My contribution

I worked with Angular and TypeScript on frontend modules and API-driven interfaces.

The existing application patterns guided how new functionality was implemented.

## Reusable patterns

Working across different reporting modules made common UI structures useful.

Reusable components helped reduce unnecessary duplication.

## What I learned

The more modules an enterprise application has, the more important consistency becomes.`
  },

  {
    slug: 'using-rxjs-in-angular-projects',
    title: 'Using RxJS in Real Angular Projects',
    category: 'Angular',
    date: '2026-04-28',
    readingTime: '5 min read',
    summary:
      'Practical notes on working with RxJS while developing API-driven Angular applications.',
    content: `## RxJS in Angular

RxJS is an important part of the Angular ecosystem and was part of my work on Angular applications.

It becomes especially useful when frontend code needs to work with asynchronous data and application events.

## Working with API data

Enterprise Angular applications frequently communicate with backend APIs.

Observable-based workflows help Angular applications handle asynchronous operations in a structured way.

## Keeping code maintainable

The important part is not using operators simply because they are available.

The implementation should remain understandable for the developers maintaining the application.

## What I learned

Working with RxJS in production made the concept of reactive programming more practical than simply learning operators from documentation.`
  },

  {
    slug: 'typescript-in-production-frontend-projects',
    title: 'How TypeScript Helps in Production Frontend Projects',
    category: 'Frontend',
    date: '2026-04-25',
    readingTime: '5 min read',
    summary:
      'Practical notes on using TypeScript across Angular and React projects to keep frontend code predictable.',
    content: `## Why TypeScript matters

I have worked with TypeScript across Angular and React projects.

It provides structure around application data and component code.

## Working with component data

When applications become larger, knowing the expected shape of data becomes increasingly useful.

TypeScript helps make those expectations visible in the code.

## Working across frameworks

The syntax and architecture may differ between Angular and React, but TypeScript remains useful in both environments.

## What I learned

TypeScript is most useful when it improves confidence in the code rather than simply adding types everywhere.`
  },

  {
    slug: 'building-consistent-ui-across-enterprise-modules',
    title: 'Keeping UI Consistent Across Enterprise Modules',
    category: 'Frontend',
    date: '2026-04-22',
    readingTime: '5 min read',
    summary:
      'Lessons from maintaining consistent frontend patterns across many business modules in enterprise applications.',
    content: `## The consistency problem

Large enterprise applications can contain many modules developed over time.

Without common patterns, similar screens can start behaving differently.

## My experience

Working across multiple XSwift modules showed me the value of reusable components and established UI patterns.

Angular, TypeScript and the existing styling systems were used across the application.

## Reuse before duplication

Before creating a new component, it is useful to understand whether an existing pattern can be reused.

This reduces unnecessary duplication and makes future maintenance easier.

## What I learned

Consistency is not only a design concern.

It also makes frontend code easier for developers to understand and maintain.`
  },

  {
    slug: 'working-with-firexch-react-project',
    title: 'Working with React on the FireXch Project',
    category: 'React / Next.js',
    date: '2026-04-19',
    readingTime: '5 min read',
    summary:
      'Practical notes from working on React frontend workflows using TypeScript, Tailwind CSS and API-driven features.',
    content: `## The project

FireXch was a production React project involving multiple frontend workflows.

My work included building interfaces and connecting them with application APIs.

## Technologies

The frontend used React.js, TypeScript and Tailwind CSS.

Axios was used for API communication, while React Query was used for server-state management.

## Working with real-time data

The application also involved WebSocket-based workflows.

This required the frontend to respond to data changes that could happen outside a normal request-response cycle.

## What I learned

React development becomes more interesting when UI state, server state and real-time data need to work together.`
  },

  {
    slug: 'building-react-admin-workflows',
    title: 'Building Admin Workflows with React',
    category: 'React / Next.js',
    date: '2026-04-16',
    readingTime: '5 min read',
    summary:
      'Lessons from building administration interfaces and reusable React components for production workflows.',
    content: `## Admin applications

Administration interfaces usually contain many forms, tables, filters and actions.

The challenge is keeping those screens consistent as the number of workflows increases.

## My React work

I worked with React.js and TypeScript to build reusable frontend components.

Tailwind CSS helped implement responsive interfaces while keeping styling patterns consistent.

## API integration

The interfaces depended on backend APIs, so the frontend had to represent loading, data and user actions correctly.

## What I learned

Reusable components are especially valuable in administration-heavy applications where many screens share similar interaction patterns.`
  },

  {
    slug: 'building-responsive-react-interfaces',
    title: 'Building Responsive React Interfaces',
    category: 'React / Next.js',
    date: '2026-04-13',
    readingTime: '4 min read',
    summary:
      'Practical notes on building responsive interfaces with React.js and Tailwind CSS.',
    content: `## Responsive UI

Production interfaces need to work across different screen sizes.

In my React projects, Tailwind CSS was used to build responsive layouts.

## Component structure

Responsive behaviour becomes easier to manage when components have clear responsibilities.

Instead of applying layout fixes randomly, I try to structure the UI so that responsiveness is part of the component design.

## Real project considerations

A responsive interface also needs to preserve usability when content changes.

Tables, forms and cards can behave differently on smaller screens.

## What I learned

Responsive development is not simply about adding media queries.

It requires thinking about how the complete interface behaves at different sizes.`
  },

  {
    slug: 'axios-api-communication-in-react',
    title: 'Using Axios for API Communication in React',
    category: 'API Integration',
    date: '2026-04-10',
    readingTime: '4 min read',
    summary:
      'Practical notes from using Axios to connect React applications with REST APIs.',
    content: `## Connecting UI and backend

React applications often depend on APIs for their main data.

In my React work, Axios was used for HTTP communication.

## Request workflows

A request is only one part of the workflow.

The frontend also needs to handle the response and update the interface according to the result.

## Keeping API logic clear

Separating API communication from UI rendering can make components easier to understand.

It also makes repeated API interactions easier to maintain.

## What I learned

API integration works best when the request layer and UI responsibilities are clearly separated.`
  },
  {
    slug: 'working-with-websocket-data-in-react',
    title: 'Working with WebSocket Data in React',
    category: 'React / Next.js',
    date: '2026-04-04',
    readingTime: '5 min read',
    summary:
      'Practical notes from working with real-time WebSocket-based frontend workflows.',
    content: `## Real-time frontend applications

Some applications cannot depend only on normal API requests.

The UI may need to react when data changes on the server.

## WebSocket workflow

The FireXch project involved WebSocket-based real-time updates.

This meant the frontend needed to respond to incoming data while maintaining the current UI state.

## Combining API and real-time data

Normal API requests and WebSocket updates can serve different purposes.

The frontend needs a clear approach for how those data sources affect the interface.

## What I learned

Real-time applications require thinking about data updates continuously rather than only after a button click.`
  },

  {
    slug: 'building-backpacker-cms-with-nextjs',
    title: 'Building a Tour Booking CMS with Next.js',
    category: 'React / Next.js',
    date: '2026-04-01',
    readingTime: '5 min read',
    summary:
      'Practical notes from building CMS workflows for tours, destinations, packages and travel content using Next.js.',
    content: `## The project

Backpacker was a production-facing tour booking CMS built with React.js and Next.js.

The platform managed different types of tourism and travel content.

## My frontend work

I worked with React.js, Next.js, TypeScript and Tailwind CSS.

The focus was building responsive interfaces and reusable frontend workflows.

## CMS workflows

The application included interfaces for tours, destinations, packages, blogs and itineraries.

Different content types required structured UI patterns.

## What I learned

CMS applications taught me how important reusable forms and content-management patterns are when many sections share similar behaviour.`
  },

  {
    slug: 'building-tour-management-cms',
    title: 'Building Tour Management Workflows',
    category: 'React / Next.js',
    date: '2026-03-29',
    readingTime: '4 min read',
    summary:
      'Lessons from building tour-related CMS interfaces in a Next.js project.',
    content: `## Tour content

Tour management was one of the workflows within the Backpacker CMS.

The frontend needed to provide structured interfaces for managing travel-related information.

## Implementation

I worked with React.js, Next.js, TypeScript and Tailwind CSS.

Reusable components helped keep similar CMS screens consistent.

## Responsive design

The CMS needed to remain usable across different screen sizes.

Tailwind CSS helped implement responsive layouts while keeping styling maintainable.

## What I learned

Content-heavy applications benefit from reusable components and predictable form structures.`
  },

  {
    slug: 'building-destination-and-itinerary-interfaces',
    title: 'Building Destination and Itinerary Interfaces',
    category: 'React / Next.js',
    date: '2026-03-26',
    readingTime: '4 min read',
    summary:
      'Practical notes from building destination and itinerary management interfaces in a Next.js CMS.',
    content: `## Content workflows

Destinations and itineraries are different types of travel content but share several frontend patterns.

The CMS needed structured interfaces for managing both.

## Reusable components

Working with similar content workflows made component reuse useful.

Instead of creating unrelated implementations, common patterns could be structured for reuse.

## My technology stack

The frontend used React.js, Next.js, TypeScript and Tailwind CSS.

## What I learned

Similar business workflows often provide good opportunities for component reuse.`
  },

  {
    slug: 'building-blog-management-in-a-cms',
    title: 'Building Blog Management in a CMS',
    category: 'React / Next.js',
    date: '2026-03-23',
    readingTime: '4 min read',
    summary:
      'Lessons from implementing blog-related content workflows inside a Next.js CMS.',
    content: `## Blog management

The Backpacker CMS included blog-related content management.

The frontend needed to provide a structured interface for managing that content.

## Building the interface

React.js and Next.js were used with TypeScript and Tailwind CSS.

The focus was on maintainable and responsive UI.

## Reusable patterns

Content-management screens often contain similar controls.

Keeping those patterns reusable reduces repeated UI implementation.

## What I learned

CMS development is a good example of why reusable components matter in real projects.`
  },

  {
    slug: 'building-qgen-with-angular',
    title: 'Building QGen with Angular',
    category: 'Angular',
    date: '2026-03-20',
    readingTime: '5 min read',
    summary:
      'Practical notes from working on the QGen AI-based question generator using Angular and Tailwind CSS.',
    content: `## The project

QGen was an AI-based question generator project focused on educational content.

The frontend provided workflows around structured educational information.

## My work

I worked with Angular, TypeScript, Tailwind CSS and REST APIs.

The frontend consumed backend data and presented it through application workflows.

## Structured content

The application worked with concepts such as subjects, chapters, topics, templates and difficulty levels.

This required the frontend to keep related information organised.

## What I learned

Working on structured content systems improved my understanding of dynamic forms and API-driven interfaces.`
  },

  {
    slug: 'working-with-dynamic-educational-content',
    title: 'Working with Dynamic Educational Content',
    category: 'Angular',
    date: '2026-03-17',
    readingTime: '5 min read',
    summary:
      'Lessons from building frontend workflows around subjects, chapters, topics and question templates.',
    content: `## Structured educational data

Educational applications can contain multiple relationships between subjects, chapters, topics and questions.

The frontend needs to represent these relationships clearly.

## My experience

In QGen, I worked with Angular and REST APIs to build frontend workflows around educational content.

Tailwind CSS was used for the interface.

## Keeping forms manageable

Dynamic content often requires forms that change based on the selected information.

Keeping the component structure clear helps make these workflows easier to maintain.

## What I learned

Complex forms become easier when the data structure and UI responsibilities are clearly understood.`
  },

  {
    slug: 'working-on-timelabs-hrms',
    title: 'Working on the Timelabs HRMS Platform',
    category: 'Angular',
    date: '2026-03-14',
    readingTime: '5 min read',
    summary:
      'Practical notes from contributing to the Timelabs HRMS platform using Angular and REST APIs.',
    content: `## The platform

Timelabs HRMS is a SaaS-based HR management platform.

My work involved frontend development across HR-related workflows.

## Frontend contribution

I worked with Angular and REST APIs to build and maintain frontend interfaces.

The application contained multiple business areas that needed consistent UI behaviour.

## Enterprise application experience

Working on an HRMS helped me understand how frontend workflows support real business processes.

The UI needs to be reliable because users depend on it for day-to-day operations.

## What I learned

Business applications require more than visual implementation.

Understanding the process behind each screen is important when building reliable frontend features.`
  },

  {
    slug: 'building-employee-self-service-features',
    title: 'Building Employee Self-Service Features',
    category: 'Frontend',
    date: '2026-03-11',
    readingTime: '4 min read',
    summary:
      'Lessons from working on employee self-service workflows and HR-related frontend features.',
    content: `## Employee self-service

Employee self-service applications provide users with direct access to HR information and workflows.

The interface needs to make common actions straightforward.

## My experience

I contributed to employee-focused frontend workflows as part of my work on HR-related products.

The work involved API-driven data and reusable frontend patterns.

## User-focused interfaces

Unlike internal administration screens, employee-facing features need to be especially clear.

Users should be able to understand what action is available without unnecessary complexity.

## What I learned

Good frontend development requires thinking about the person using the feature, not only the implementation.`
  },

  {
    slug: 'working-with-react-native-hr-workflows',
    title: 'Working with React Native for HR Workflows',
    category: 'Frontend',
    date: '2026-03-08',
    readingTime: '5 min read',
    summary:
      'Practical notes from contributing to employee self-service mobile workflows using React Native.',
    content: `## Mobile frontend work

React Native introduced a different way of thinking about frontend interfaces compared with web applications.

The Timelabs ESS application focused on employee self-service workflows.

## My contribution

I worked on React Native interfaces and REST API-driven functionality.

Reusable components were important because multiple mobile screens followed similar patterns.

## Mobile considerations

Mobile interfaces have less available space than desktop applications.

This makes simple navigation and clear interaction patterns important.

## What I learned

Working with mobile interfaces improved my understanding of responsive thinking beyond traditional web layouts.`
  },

  {
    slug: 'building-visitor-management-with-react-native',
    title: 'Building Visitor Management with React Native',
    category: 'Frontend',
    date: '2026-03-05',
    readingTime: '5 min read',
    summary:
      'Lessons from working on visitor registration, approvals and tracking workflows in a mobile application.',
    content: `## The application

Vizitrac was a visitor management application built around visitor-related workflows.

The application included registration, check-in and check-out, approvals, tracking and notifications.

## My work

I worked with React Native and REST APIs on the frontend.

The goal was to create reusable mobile interfaces for the different workflows.

## Keeping mobile workflows simple

Visitor applications need clear actions because users may interact with them quickly.

The interface should make the current state and available action easy to understand.

## What I learned

Simple workflows still require careful frontend design when they are part of a production application.`
  },

  {
    slug: 'building-ctpl-console-with-react',
    title: 'Building the CTPL Console with React',
    category: 'React / Next.js',
    date: '2026-03-02',
    readingTime: '5 min read',
    summary:
      'Practical notes from contributing to an enterprise administration dashboard using React.js.',
    content: `## The platform

CTPL Console was an enterprise administration platform.

The application contained workflows around clients, subscriptions, users and access management.

## My frontend work

I worked with React.js and REST APIs to develop and maintain frontend interfaces.

Reusable components helped keep the administration screens consistent.

## Dashboard development

Administration applications often contain many forms, tables and actions.

Keeping those patterns structured makes the application easier to maintain.

## What I learned

Admin dashboards benefit significantly from reusable components and consistent interaction patterns.`
  },

  {
    slug: 'working-on-timelabs-product-website',
    title: 'Working on a Product and Marketing Website',
    category: 'React / Next.js',
    date: '2026-02-27',
    readingTime: '4 min read',
    summary:
      'Practical notes from working on the Timelabs product and marketing website using React.js.',
    content: `## A different type of frontend project

Product and marketing websites have different requirements from enterprise dashboards.

The focus is not only functionality but also presenting the product clearly.

## My work

I worked with React.js on the Timelabs website.

The frontend needed to present product information through responsive web interfaces.

## Reusable sections

Marketing websites often contain repeated patterns such as content sections, cards and navigation elements.

Reusable components help maintain consistency across the site.

## What I learned

Frontend development changes depending on the product goal.

A marketing website requires the same attention to code quality while putting more emphasis on presentation and user experience.`
  },

  {
    slug: 'building-company-profile-website-with-react',
    title: 'Building a Company Profile Website with React',
    category: 'React / Next.js',
    date: '2026-02-24',
    readingTime: '4 min read',
    summary:
      'Lessons from working on a company profile and services website using React.js.',
    content: `## The website

The Cynosure website was a company profile and services-focused web project.

It required presenting company information and services through a structured interface.

## My frontend work

I worked with React.js to build and maintain frontend sections.

Responsive layouts and reusable components helped keep the website consistent.

## Content presentation

Unlike a business application, the website focuses heavily on how information is presented.

The frontend therefore needs to balance maintainable code with clear visual hierarchy.

## What I learned

Good frontend development applies to marketing and profile websites just as much as application dashboards.`
  },

  {
    slug: 'rest-api-loading-error-and-success-states',
    title: 'Handling API Loading, Success and Error States',
    category: 'API Integration',
    date: '2026-02-21',
    readingTime: '5 min read',
    summary:
      'Practical lessons from handling different API states in production frontend applications.',
    content: `## A request has multiple states

Calling an API is not just about receiving successful data.

The UI also needs to represent loading and error states.

## Why this matters

If the frontend does not communicate the current request state, users may not know whether an action is still processing or has failed.

## My project experience

I worked with REST API-driven workflows across Angular and React applications.

These workflows required the frontend to react correctly to backend responses.

## What I learned

A good API integration considers the complete request lifecycle instead of only the success response.`
  },

  {
    slug: 'debugging-request-to-render-frontend-issues',
    title: 'Debugging the Request-to-Render Frontend Flow',
    category: 'Frontend',
    date: '2026-02-18',
    readingTime: '5 min read',
    summary:
      'A practical approach to debugging frontend issues by following the complete flow from user action to rendered UI.',
    content: `## Where frontend bugs happen

A visible UI problem can have many possible causes.

The issue might start with a user action, component logic, API request, response data or rendering state.

## Following the flow

When debugging production issues, I find it useful to follow the complete request-to-render flow.

This helps identify where the expected behaviour changes.

## Avoiding random fixes

Changing code without understanding the cause can create another problem.

Reproducing the issue and identifying the actual break point leads to a more reliable fix.

## What I learned

Debugging is easier when the application is treated as a complete flow rather than a collection of isolated components.`
  },

  {
    slug: 'how-i-approach-frontend-production-bugs',
    title: 'How I Approach Frontend Production Bugs',
    category: 'Frontend',
    date: '2026-02-15',
    readingTime: '5 min read',
    summary:
      'Practical steps I use when investigating frontend problems in real production applications.',
    content: `## Reproduce first

The first step is understanding whether the issue can be reproduced consistently.

Without reproduction, it is difficult to know whether a change actually fixes the problem.

## Follow the data

I look at the user action, component state, API request, response and resulting UI.

This helps narrow down the actual source of the issue.

## Understand before changing

Production applications often have existing dependencies between components and modules.

A quick fix without understanding those dependencies can create another issue.

## What I learned

Good debugging is a process of reducing uncertainty until the actual cause becomes clear.`
  },

  {
    slug: 'frontend-component-reusability-from-real-projects',
    title: 'What Real Projects Taught Me About Component Reusability',
    category: 'Frontend',
    date: '2026-02-12',
    readingTime: '5 min read',
    summary:
      'Practical lessons about when and how reusable components become valuable in real frontend applications.',
    content: `## Reuse is more than copying UI

A reusable component should solve a common requirement rather than simply move markup into another file.

The API of the component should also make sense for the screens using it.

## My experience

Working across multiple Angular and React projects showed me repeated patterns in tables, forms, cards and other UI elements.

Those patterns are good candidates for reuse.

## Avoiding over-engineering

Not everything needs to become a shared component.

A component should be shared when there is a real common requirement.

## What I learned

Good reuse comes from recognising repeated behaviour while keeping components simple enough to understand.`
  },

  {
    slug: 'responsive-design-lessons-from-production-projects',
    title: 'Responsive Design Lessons from Production Projects',
    category: 'Frontend',
    date: '2026-02-09',
    readingTime: '5 min read',
    summary:
      'Practical lessons from building responsive interfaces across dashboards, CMS applications and websites.',
    content: `## Responsive development

Responsive design was part of the frontend work across several projects.

The requirements differed between enterprise dashboards, CMS interfaces and marketing websites.

## Different screens need different solutions

A dashboard with tables has different responsive challenges from a marketing website.

CMS forms also need to remain usable when screen space becomes limited.

## My approach

I focus on the layout structure first and then adapt individual components for smaller screens.

## What I learned

Responsive design is easier when it is considered during component development instead of being added at the end.`
  },

  {
    slug: 'working-with-tailwind-css-in-react-projects',
    title: 'Working with Tailwind CSS in React Projects',
    category: 'React / Next.js',
    date: '2026-02-06',
    readingTime: '4 min read',
    summary:
      'Practical notes from using Tailwind CSS while building React and Next.js production interfaces.',
    content: `## Utility-first styling

Tailwind CSS was part of my work on React and Next.js projects.

It allowed styles to be applied close to the component structure.

## Responsive layouts

Responsive utility classes made it easier to define different layouts for different screen sizes.

This was useful for CMS screens containing cards, forms and content sections.

## Keeping styles manageable

Utility classes can become difficult to read when components become too complex.

Keeping components focused helps keep the styling easier to understand.

## What I learned

Tailwind is most useful when the component structure is already clear.`
  },

  {
    slug: 'moving-between-angular-and-react',
    title: 'What I Learned Moving Between Angular and React',
    category: 'Frontend',
    date: '2026-02-03',
    readingTime: '5 min read',
    summary:
      'Lessons from working with both Angular and React across different production projects.',
    content: `## Two different approaches

Angular and React provide different approaches to building frontend applications.

Working with both helped me understand that framework-specific knowledge is only part of frontend development.

## Common concepts

Component reusability, API integration, responsive design and maintainable code remain important regardless of the framework.

## My experience

My Angular work involved enterprise business applications, while React work included administration interfaces and product workflows.

Next.js was also part of the Backpacker CMS project.

## What I learned

Learning multiple frameworks becomes easier when the underlying frontend concepts are already understood.`
  },

  {
    slug: 'understanding-business-workflows-as-a-frontend-developer',
    title: 'Why Understanding Business Workflows Matters',
    category: 'Frontend',
    date: '2026-01-31',
    readingTime: '5 min read',
    summary:
      'How working on logistics, HRMS, CMS and administration applications changed my approach to frontend development.',
    content: `## Frontend is connected to business

A frontend screen usually represents part of a larger business process.

Understanding that process helps explain why the screen needs certain fields, actions and states.

## My experience

I worked across logistics, HRMS, CMS and administration projects.

Each project had different workflows even when the frontend technologies were similar.

## Implementing with context

When the business workflow is understood, frontend decisions become easier.

The developer can think about what happens before and after the current screen.

## What I learned

A frontend developer becomes more effective when they understand the problem behind the UI.`
  },

  {
    slug: 'what-production-work-taught-me-about-code-quality',
    title: 'What Production Work Taught Me About Code Quality',
    category: 'Frontend',
    date: '2026-01-28',
    readingTime: '5 min read',
    summary:
      'Practical lessons about maintainability, reusable code and consistency from working on production applications.',
    content: `## Working code is not enough

A feature can work correctly and still be difficult to maintain.

Production code needs to remain understandable when another developer has to modify it later.

## What I learned from projects

Working on large Angular applications and React projects showed me the value of reusable components and predictable structures.

## Maintainability

Simple, consistent code is usually easier to debug and extend.

This becomes especially important when multiple developers work on the same application.

## What I learned

Code quality is not only about the number of lines or how advanced the implementation looks.

It is about whether the code remains useful and understandable over time.`
  },

  {
    slug: 'how-i-learn-new-frontend-technologies',
    title: 'How I Learn New Frontend Technologies Through Projects',
    category: 'Career & Interviews',
    date: '2026-01-25',
    readingTime: '5 min read',
    summary:
      'How working on different frontend projects helped me learn Angular, React, Next.js and related tools through practical use.',
    content: `## Learning through actual work

I found that technologies become easier to understand when they are connected to a real requirement.

Working on different projects exposed me to Angular, React.js, Next.js and other frontend tools.

## Learn the reason, not only the syntax

When learning a new library or framework feature, understanding why it is useful is more valuable than memorising syntax.

## Project-based learning

Building actual interfaces gives immediate context to concepts such as components, API integration, state and responsive design.

## What I learned

Real projects provide problems that tutorials cannot always reproduce.

Those problems often create the strongest learning opportunities.`
  },

  {
    slug: 'preparing-frontend-interviews-with-real-projects',
    title: 'Preparing for Frontend Interviews Through Real Projects',
    category: 'Career & Interviews',
    date: '2026-01-22',
    readingTime: '5 min read',
    summary:
      'How real Angular and React project experience can make frontend interview preparation more practical.',
    content: `## Connect concepts to experience

Interview preparation becomes easier when technical concepts can be connected to actual project work.

Instead of only learning what a technology does, I try to understand where it was useful.

## Angular preparation

My Angular experience includes enterprise modules, TypeScript, RxJS and REST API-driven workflows.

These provide practical examples for technical discussions.

## React preparation

My React experience includes reusable components, Axios, React Query, Tailwind CSS and WebSocket workflows.

## What I learned

Project experience gives technical answers context.

It becomes easier to explain not only what a tool does, but why it was used.`
  },

  {
    slug: 'scenario-based-frontend-interview-learning',
    title: 'Why Scenario-Based Frontend Interview Questions Matter',
    category: 'Career & Interviews',
    date: '2026-01-19',
    readingTime: '5 min read',
    summary:
      'Practical thoughts on preparing for frontend interviews using real development scenarios instead of only definitions.',
    content: `## Definitions are only the beginning

Knowing a definition is useful, but frontend interviews often become more practical when the question describes a real situation.

## Questions I find useful

Examples include handling API failures, designing reusable components, managing server state and debugging production issues.

## Connect the answer to experience

Real projects provide examples for these scenarios.

The explanation becomes stronger when it is based on something actually encountered during development.

## What I learned

Scenario-based preparation helps connect technical knowledge with practical decision-making.`
  },

  {
    slug: 'lessons-from-working-on-enterprise-applications',
    title: 'Lessons from Working on Enterprise Applications',
    category: 'Career & Interviews',
    date: '2026-01-16',
    readingTime: '6 min read',
    summary:
      'The frontend lessons I learned while working across logistics, HRMS and enterprise administration applications.',
    content: `## Enterprise applications are different

Enterprise applications usually contain more business rules and workflows than simple demo projects.

My experience across logistics, HRMS and administration applications exposed me to this complexity.

## Reusability becomes important

When many modules share similar patterns, reusable components become valuable.

## Production changes the mindset

Working on production software means thinking about existing users, existing workflows and maintainability.

## What I learned

Enterprise development taught me to think beyond individual screens and consider the application as a complete system.`
  },

  {
    slug: 'from-junior-frontend-developer-to-production-work',
    title: 'What My Early Frontend Experience Taught Me',
    category: 'Career & Interviews',
    date: '2026-01-13',
    readingTime: '5 min read',
    summary:
      'Practical lessons from growing through Angular, React and production frontend projects.',
    content: `## Starting with real applications

Early frontend development gave me the opportunity to work on actual business applications rather than only practice projects.

## Learning multiple technologies

My experience grew across Angular, React.js, React Native and Next.js.

Each project introduced different frontend requirements.

## Learning from production

Production work taught me the importance of debugging, maintainability and understanding existing code.

## What I learned

Frontend growth comes from repeatedly solving real problems and learning from the implementation decisions behind them.`
  },

  {
    slug: 'what-i-learned-from-working-across-multiple-projects',
    title: 'What I Learned Working Across Multiple Frontend Projects',
    category: 'Career & Interviews',
    date: '2026-01-10',
    readingTime: '6 min read',
    summary:
      'A practical reflection on lessons learned from logistics, HRMS, CMS, mobile and administration projects.',
    content: `## Different projects, common frontend principles

The projects I worked on had very different business domains.

XSwift focused on logistics, Timelabs on HRMS, Backpacker on tourism content, and other projects focused on administration and visitor management.

## Common frontend challenges

Despite the different domains, many problems were similar.

API integration, reusable components, responsive interfaces and debugging appeared repeatedly.

## Adapting to different stacks

Working with Angular, React.js, Next.js and React Native required adapting to different architectures.

## What I learned

Frameworks change, but strong frontend fundamentals remain useful across projects.`
  },

  {
    slug: 'frontend-development-lessons-from-real-users',
    title: 'What Real Users Taught Me About Frontend Development',
    category: 'Frontend',
    date: '2026-01-07',
    readingTime: '5 min read',
    summary:
      'Practical lessons from building frontend features that are used as part of real business workflows.',
    content: `## Real users change the perspective

A feature built for real users needs to be understandable and predictable.

A technically correct implementation can still be difficult to use.

## My project experience

Working on enterprise applications exposed me to workflows used for logistics, HR and administration.

Those applications made usability an important part of frontend development.

## Clear interfaces

Users should understand the current state of the application and what action they can take next.

## What I learned

Frontend development is successful when the implementation solves the user's actual problem, not only the developer's technical requirement.`
  },

  {
    slug: 'my-approach-to-maintainable-frontend-code',
    title: 'My Approach to Maintainable Frontend Code',
    category: 'Frontend',
    date: '2027-01-04',
    readingTime: '5 min read',
    summary:
      'Practical principles I use when building and maintaining Angular and React applications.',
    content: `## Keep responsibilities clear

Components are easier to maintain when their responsibilities are understandable.

## Reuse common patterns

Repeated UI behaviour is a good opportunity for reusable components.

## Keep API workflows predictable

Frontend code should clearly represent loading, success and error states.

## Learn from existing code

When working in an existing production application, understanding current patterns is important before changing them.

## What I learned

Maintainability comes from many small decisions rather than one specific architecture pattern.`
  },
]