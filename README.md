# TKcomputers

### ecommerce app

This app is portfolio project for a fictional company that sells custom build computers, software and parts. I plan on implementing a lot of tiny features that will make this app robust and hopefully feel like a real store.

Ideas:

1. Shopping Cart
2. Email confirmations post purchase
3. Order Tracking/history
4. Review System
5. User Profiles
6. Custom orders
7. Support Tickets
8. Customer views / admin views
9. Chat bot to assist customers
10. Using Stripe to process fake purchases

Tech Stack: React, Redux, MongoDB, Express/Node

### Goals:

My goals for this portfolio project are to showcase the improvements made from bartr. I don't plan on cutting any corners so errors will all be processed correctly and legitimate form validation will be used.

My backend API server which will handle the parts/software database as well as user profiles is almost complete. It's also noticably better organized than bartr.

I will be spending time at first creating a tool to easily add items to the database and it will end up being an admin only tool in production.

### Concerns:

I know that SPA have terrible authetication. I want to make sure non-admin users can't access the upload API so this will be a huge focus. I'm not sure exactly how I will do this atm.

Other than that, I'm fairly confident I can complete everything on my idea list. I will have to look up how to make a chatbot and research Stripe.

In the end I want this to feel like it's an actual ecommerce site with every modern day option available. Things like coupon codes, email confirmations and a website with a robust look/feel will be important. I'm going to set my deadline at 2 weeks, just like with the bartr app. I won't be spending a lot of time figuring out styling or http methods so I'm sure I'll complete it in time. This app will be much more complicated, however, so anything can happen.

Start Date: Dec 13th, 2017
Deadline: Dec 27th, 2017

## Updates:

### Dec 15th, 2017

I'm using libraries during this project which is proving to be amazing and stressful at the same time. Material-UI definitely makes everything look nicer and a nice result is that I don't have to deal with coding my own solutions (or recreating the wheel, to use an overused term).

This is a much more complex project than Bartr and I've been realizing I need to actual plan out this app in a much better way.

So far I've been implementing 'admin' features to handle adding parts to the database. I have also been trying to make it a legit process, so I'm including light verification on forms and tracking state with redux. Redux form makes forms easier in general, although I need to work with it more. I'm dynamically generating form fields and it's making validation tricky. It also took some work to get it working with Material-UI correctly.

A big concern right now is making sure the app is organized correctly so I can make the dev process as simple as possible. I don't mean file structure but how the app logic flows. I'll have 'secure' pages for admins but I need to focus on how I'll implenent the customer facing side. I still have a lot of work to do!
