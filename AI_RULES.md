# AI Development Rules

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui library
- **Animations**: Framer Motion
- **Icons**: react-icons and Lucide React
- **Routing**: Next.js App Router
- **Fonts**: next/font (JetBrains Mono)

## Library Usage Rules

1. **UI Components**: Always use shadcn/ui components when available. Create custom components only when shadcn/ui doesn't provide what's needed.

2. **Icons**: Use react-icons for general icons and lucide-react for specific icons. Prefer Lucide icons for consistency.

3. **Styling**: Use Tailwind CSS classes exclusively. Do not use traditional CSS files except for global styles.

4. **Animations**: Use Framer Motion for all animations. Do not use CSS animations or transitions directly.

5. **Routing**: Use Next.js App Router conventions. Do not use react-router.

6. **State Management**: Use React Context API for global state. For complex state management, consider Zustand only if absolutely necessary.

7. **Data Fetching**: Use Next.js built-in data fetching methods (fetch in Server Components, SWR for client-side data fetching).

8. **Forms**: Use React Hook Form for complex forms. For simple forms, built-in React state is acceptable.

9. **HTTP Requests**: Use fetch API for all HTTP requests. Do not use axios or other HTTP libraries.

10. **Date Handling**: Use date-fns for date manipulations. Do not use moment.js or other date libraries.

11. **Charts/Graphs**: Use Recharts when data visualization is needed.

12. **Testing**: Use Jest and React Testing Library for unit tests.

13. **Code Splitting**: Use Next.js dynamic imports for code splitting. Do not use other code splitting libraries.