# Spree E-commerce Test Plan: What Actually Matters

## What We're Testing

Spree is a modular e-commerce platform with core, API, admin, storefront, emails, and payment components. It handles multi-vendor, multi-store, and multi-currency setups. The setup works within the existing Rails/Spree architecture while adding JavaScript-based testing through Playwright and TypeScript. Test data management is addressed through fixtures and setup scripts.

## Retrospective: Building the Framework, Testing the Thinking, Approach

This quality engineering assignment began with a simple goal: design a test framework that’s both practical and sustainable. Instead of rushing into test cases, I spent time exploring the product and designing the skeleton for the future automation framework: page, component and API-service object models, test data generation utilities.

**Framework Highlights:**

- Modern Architecture: Uses TypeScript, POM, COM, implements fixtures, API-first approach
- Robust Configuration: flexible environment support, CI integration
- Good Practices: Environment variables, test data generation, clear organization

**Project structure:**

- Dedicated Playwright sub-directory:
  - It makes it easier to isolate its `package.json` dependencies from the rest of the project. This results in less dependency conflicts if the project is also using Typescript, in case of a Ruby project, this risk is minimal.
  - It is easy to move the project to another root directory or a separate repository
  - It helps prevent global type definition conflicts due to pollution of global namespace by e2e framework
- POM
  - Component Objects: shared UI components are imported to page objects via BasePage class
  - Page Objects: provide extensive methods for interacting with pages
  - API client Class that exports most common set of user actions as operations
  - Fixtures: for instantiating Page Objects and providing authenticated browser and request context
- Basic datafactory
  - Handles dynamic test data generation
  - Stores reusable test data in constants.ts
- CI
  - Dedicated docker-compose file for the CI github workflow that spins up individual containers for the application web service, the database, redis service, and also a dedicated one for playwright
  - A simple workflow for starting and running the selected number of Playwright checks against that setup.
  - Linter, prettier, and type check before any E2E tests are run.

**Challenges:**

- No docker-compose configuration file for setting up test environment in CI
- Ruby: I needed some time to ramp up on Ruby architecture before adding Playwright
- Lack of proper semantic HTML in many components, very few test-data-ids
- Very concise requirements outlined in the assignment, had to improvise

**What could be improved:**

- Browser coverage: Currently only Chrome is enabled in the configuration
- Mock Server Limitations: Mock server implementation is basic
- Configuration Gaps: Limited retry strategies, no explicit test grouping or tagging
- Adding images to sample data
- Consider caching browser binaries
- Manage environment variables and secrets better in CI
- Consider caching re-usable docker images if they are stable in CI

## Platform limitations

**Server-Side Rendering (SSR) Constraints**: Spree's reliance on server-side rendering complicates the interception and mocking of HTTP traffic during testing. This architecture limits the effectiveness of frontend test automation tools that depend on client-side interactions.

**Customization Complexity**: While Spree offers extensive customization capabilities, implementing these often requires deep Ruby on Rails expertise. This necessity can slow down automation development and increase the learning curve for QA teams.

**Scalability Considerations**: Although Spree can handle significant traffic and product volumes, scaling the platform requires careful architectural planning. Automation scripts must account for potential performance bottlenecks and ensure reliability under load.

**Sample data missing images**: I noticed that the sample data set is missing product images. I found an existing issue in the original project https://github.com/spree/spree/issues/10865. Spree no longer offers images within their sample app due to licensing and copy-right concerns. This can be fixed by uploading images after the sample data is loaded, you can use [free images from Unsplash](https://unsplash.com/).

## Testing Priority Outline

Below, I outline the testing priorities for the Spree Commerce platform, focusing on highest-risk areas first based on user traffic, revenue impact, security concerns, and feature complexity. Unfortunately, I ran out of available time to implement all of them but the overview might give you my thinking and approach. Depending on the resources available, either only high-risk or high-risk to medium-risk scenarios could be good candidates for automation. Also things like static code checks can be very beneficial while being very low effort and cost additions.

1. Product Catalog & Discovery (High) <br>
   **Rationale**: Directly affects revenue by impacting user conversion and referral rates

- Search functionality, category navigation and filtering
- Product detail page accuracy
- Non-functional testing: image loading and optimization, performance under load, SEO elements and metadata, mobile responsiveness

2. Payment Processing (Critical) <br>
   **Rationale**: Core revenue functionality with security implications

- Payment gateway integrations (Stripe, PayPal) mocking gateway service
- Card tokenization, PCI compliance, multi-factor payment confirmation
- Transaction state management including refund and partial payment handling
- Non-functional testing: concurrent payment stress testing, error recovery scenarios, security of payment data flow

3. Checkout & Order Management (High) <br>
   **Rationale**: Order lifecycle directly impacts customer satisfaction and revenue

- Complete checkout flow end-to-end :heavy_check_mark:
- Guest checkout vs logged-in experience, merging guest and authenticated sessions
- Cart data persistence across sessions :heavy_check_mark:
- Order status transitions :heavy_check_mark:
- Inventory synchronization 
- Email notifications
- Return and exchange processing

4. User Account Management (High) <br>
   **Rationale**: Affects user retention and repeat purchase behavior

- Registration and authentication :heavy_check_mark:
- Password reset and security
- Order history and account details
- Saved payment methods
- Wishlist and favorites functionality
- Address book management
- Permission boundaries

5. Admin Operations (Medium) <br>
   **Rationale**: Impacts operational efficiency and inventory accuracy

- Order processing workflows, inventory and product management 
- Multi-store configuration
- Reports and analytics accuracy
- User role permissions :heavy_check_mark:
- Bulk operations handling
- Dashboard performance

6. Security & Compliance (High) <br>
   **Rationale**: Automated static analysis checks are low effort but high impact

- OWASP Top 10 vulnerability scanning
- API authentication and rate limiting
- Data integrity validation
- Session management
- SQL injection protection
- XSS prevention
- Accessibility compliance (WCAG)

7. Localization & International (Low) <br>
   **Rationale**: Affects total addressable market (TAM), higher priority for international platforms

- Multi-currency support
- Language handling
- Regional tax calculations
- Address format handling
- Payment method availability by region
- Shipping option relevance
- Time zone handling

## Automation Strategy

- **Unit Tests**: Core business logic and model validations
- **Integration Tests**: API endpoints, module interactions
- **End-to-End Tests**: Critical business flows (checkout, user registration)
- **Security Scans**: Integrated into CI pipeline
- **Performance Tests**: Load testing for high-traffic areas

## Test Environment Requirements

- Development: Local developer testing
- QA: Functional testing environment
- Staging: Production-like environment for final verification
- Production: Monitoring and smoke tests

## Risk Mitigation

- Prioritize test coverage based on business context and feature usage analytics
- Regularly perform security audits and penetration testing
- Maintain comprehensive regression test suite for core functionality
- Monitor error rates and performance metrics in production

## Assignments

**3-5 high priority scenarios**

- Authentication and authorization as an admin user vs as non-admin user.
- Checkout for a guest user
- Order persistence on the admin-side

**Assignments: API mocking**
For the API mocking assignment, the task was to automate the full checkout flow using API interactions. I began by experimenting with page.route and page.on methods provided by the Playwright page fixture, attempting to intercept and mock parts of the checkout process using the same APIs the client application relies on.

Early on, I encountered some limitations related to the app’s server-side rendering architecture. This made interception and mocking less straightforward than it might be in purely client-rendered contexts. It raised an interesting question for me: when mocking in such setups, how much of the flow can—or should—be realistically simulated?

In a real-world scenario, I’d want to have a conversation about whether mocking certain APIs, especially those connected to sensitive or stateful parts of the system (like payments), is truly feasible or maintainable long-term.

That said, I continued by implementing the full checkout flow through the API, covering the happy path. I attempted to isolate and mock only the payment step. Technically, I was able to simulate a response, but it led to another challenge: the database state wasn’t reflecting the mocked result.

After digging into Playwright’s capabilities, I realized that tools like page.route and page.on are mainly designed to mock responses as consumed by the frontend, rather than for full backend-side behavior. When using APIRequestContext for backend-style testing, mocking becomes a bit abstract—essentially, you’re asserting against a response you’ve crafted yourself. That got me thinking: what is the real value of that kind of test? It feels more like unit-testing your mocking setup than validating application behavior.

I also looked into spinning up a local mock server to create a more realistic simulation, but didn’t find a setup that could convincingly dictate behavior back to the backend service in a stateful way.

What I’m still sitting with is this: mocking works well when we’re testing how the frontend interprets different backend responses—loading states, errors, edge cases, etc. But with direct API testing, where there’s no page to react, I wonder if the value of mocking drops off—unless we’re using a full-featured mock server the actual app is wired to listen to.

Curious how others have approached this—especially in SSR contexts where visibility and control over request flow isn’t always straightforward. When is mocking helpful in API testing, and when does it just give the illusion of coverage?

**CI implementation**

- Disclaimer: One of the tests keeps failing when run by CI, I'm still investigating it, it passes when I run it locally.
- Both local development testing and CI pipeline testing are covered
- The approach follows DevOps best practices by automating the test process and integrating with your CI/CD workflow

**Final E2E flow for both local and CI** 
![alt text](lib/localTestRunResults.png)

**Usage of AI in the project\***

I mostly relied on AI when getting familiar with Ruby architecture, I have never worked with a Ruby project so I needed some guidance on what package managers are used, what libraries exist for unit testing, how the gem-based architecture works since I figured most of the logic lived in the parent Spree repository and there was minimal backend logic in the Starter app.

Prompt examples:

```
Act as an experienced Ruby engineer, explain to me in very simple terms the most common structure of Ruby applications.
```

Debugging API response JSONs for mock services.

```
Analyze these two large json files, one produced a 200 OK response, the other 400 Bad Request, highlight the differences.
```

As I've never setup a docker compose instance on a CI, I needed some quick entry points to understand what I need, what Github actions I can use.

```
Act as an experienced DevOps, ramp me up on what options exist for setting up docker containers that run on a CI pipeline.
```

**Documentation**
For documenting requirements, the projects I've been working on used everything from Notion and Trello to Atlassian Jira and Confluence solutions. I personally lean towards more light-weight options whenever possible so I'd recommend starting with Notion and using a lot of visuals like Whimsical App and/or X-mind mind maps app, diagrams and of course Figma for designs.

For capturing test related information, I believe this kind of READMEs works for automation frameworks, and I love to writes code that is self-explanatory and self documenting. I believe having a single source of truth is a must for any team that wants to be efficient. For capturing test strategies, mind maps and checklists have worked best for me. For test sessions and day-to-day notes, I'm using note-taking apps like Logseq or RoamResearch.

# Running Playwright test against a local instance of the application

Explain what other scenarios could be included.
Explain how you would document the requirements and how to ensure a confident release process.
Create clear documentation around Playwright, Test Scenarios and anything else you think is relevant.
This is a technical assessment for Quality Engineering using Spree Commerce platform.

## About Spree Commerce

This project uses [Spree Commerce](https://spreecommerce.org) - the open-source e-commerce platform for Rails. It is a great starting point for any Rails developer to quickly build an e-commerce application.

## Local Installation

Please follow [Spree Quickstart guide](https://spreecommerce.org/docs/developer/getting-started/quickstart) to set up your Spree application using the Spree starter.

After following the above, use the steps below to run Playwright tests against the development instance running locally 

```
npx playwright test
```

To run tests in the playwright UI mode
```
npx playwright test --ui 
```

To run tests in a specific .spec.ts file
```
npx playwright test name-of-the-file.spec.ts
```

To run the new docker-compose-test instance locally

```bash
# Start services
docker compose -f docker-compose-test.yml up -d

# Run Playwright tests
docker compose -f docker-compose-test.yml run playwright

# Check logs
docker compose -f docker-compose-test.yml logs -f web
```

To clear the docker-compose-test instance artifacts locally

```bash
# Stop and remove all containers, networks, and volumes
docker compose -f docker-compose-test.yml down -v

# Clean up orphan containers
docker compose down --volumes --remove-orphans

# Prune containers
docker container prune -f

# Prune images
docker image prune -f

```

To run the CI locally use;

```bash
brew install act
act push
act push
```

OR for MacOS

```bash
brew install act
act push --container-architecture linux/amd6
```

## Deployment

Please follow [Deployment guide](https://spreecommerce.org/docs/developer/deployment/render) to quickly deploy your production-ready Spree application.

## Troubleshooting

### libvips error

If you encounter an error like the following:

```bash
LoadError: Could not open library 'vips.so.42'
```

Please check that libvips is installed with `vips -v`, and if it is not installed, follow [installation instructions here](https://www.libvips.org/install.html).
