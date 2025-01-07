// import { Clerk } from "@clerk/clerk-js";

// const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

// const clerk = new Clerk(clerkPubKey);
// await clerk.load({
//   // Set load options here
// });

// if (clerk.user) {
//     document.getElementById('app').innerHTML = `
//       <div id="user-button"></div>
//     `
  
//     const userButtonDiv = document.getElementById('user-button')
  
//     clerk.mountUserButton(userButtonDiv)
//   } else {
//     document.getElementById('app').innerHTML = `
//       <div id="sign-in"></div>
//     `
  
//     const signInDiv = document.getElementById('sign-in')
  
//     clerk.mountSignIn(signInDiv)
//   }

// 

import { Clerk } from '@clerk/clerk-js';

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const clerk = new Clerk(clerkPubKey);

await clerk.load();

const authContainer = document.getElementById('auth-container');
const userButtonContainer = document.getElementById('user-button');
const getStartedButton = document.getElementById('get-started-btn');

// Function to handle "Get Started" button state
function updateGetStartedButton() {
    if (clerk.user) {
        // User is logged in, update button to "Enter Projectiva2"
        if (getStartedButton) {
            getStartedButton.textContent = 'Enter Projectiva2';
            getStartedButton.addEventListener('click', () => {
                window.location.href = '/dashboard.html';
            });
        }
    } else {
        // User is not logged in, update button to open Clerk sign-in modal
        if (getStartedButton) {
            getStartedButton.textContent = 'Get Started';
            getStartedButton.addEventListener('click', () => {
                clerk.openSignIn({
                    afterSignInUrl: '/dashboard.html', // Redirect to dashboard after login
                    afterSignUpUrl: '/dashboard.html', // Redirect to dashboard after signup
                });
            });
        }
    }
}

// Check Clerk user state and mount appropriate components
if (clerk.user) {
    // User is logged in
    userButtonContainer.style.display = 'block';
    clerk.mountUserButton(userButtonContainer);
    authContainer.style.display = 'none';
} else {
    // User is not logged in
    authContainer.style.display = 'none'; // Hide the auth container (if it's unnecessary)
    userButtonContainer.style.display = 'none';
}

// Update the button state based on user status
updateGetStartedButton();