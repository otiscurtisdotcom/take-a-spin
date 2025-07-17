
# Take a Spin!

## Overview

A simple spinning wheel game built with Angular 20, showcasing modern Angular features such as standalone components and signals. Users can spin the wheel either randomly or with a fixed result, then see the outcome on a results page. The project demonstrates UI structuring, animation, state management, and routing guards.

---

## Deployment

This project is deployed via GitHub Pages and can be accessed at:  
https://otiscurtisdotcom.github.io/take-a-spin/

---

## Tech Stack

- Angular 20 (NG20)
- TypeScript
- CSS/SCSS for styling

Notable Angular features used:

- **Standalone Components** for simpler module management
- **Signals** for reactive state handling
- Angular Router with **route guards**
- Angular Animations (router animations and wheel spin)

---

## How to Run

Clone the repository and run:

```
npm install
npm start
```

This will start the Angular development server, typically accessible at `http://localhost:4200`.

---

## Linting and Tests

- Run all linting (TS, HTML, SCSS) and automatic fixes:

```
npm run lint
```

This runs ESLint (including TypeScript linting), Stylelint (SCSS), and fixes issues where possible. Note: The lint setup enforces strong typing by not allowing `any`.

- Run unit tests:

```
npm run test
```

This runs the Angular testing suite (Jasmine/Karma), covering components, services, and guards.

---

## Project Flow and Key Features

- The **Welcome Page** serves as the landing page with a "Get Started" button.
- The **Wheel Page** presents a spinning wheel divided into segments, with buttons for:
  - Random spin (picks a random segment)
  - Fixed spin (always lands on a predefined segment. This will be 3, but can be edited in the consts)
- Upon spinning, the result is stored in an Angular **signal** inside the `WheelService`.
- The **Results Page** displays the selected segment's label and color.
- A **route guard** prevents navigating to the results page unless a spin has completed, enhancing flow robustness.
- The UI is responsive and mobile-friendly.
- Animations use CSS transitions and Angular animation support.

---

## Notes

- The project emphasizes code clarity with semantic HTML, meaningful class names, and well-commented logic, especially for spin calculations and navigation.
- Modern Angular features help reduce boilerplate and improve state management.

---

Thank you for reviewing this project!
