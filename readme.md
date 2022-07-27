# Portfolio Website - Server

- Decided to use Koajs instead of Express as this was a good opportunity to familiarize myself with other tools
- Koajs does not have req and res like Express, and instead returns both of them in ctx (context)
- Started a new sqLite database with Prisma ORM 
- There will be no registering new users as the only user using this functionality will be me to create posts for the blog section of the portfolio. 
- Why didn't I use a CMS like wordpress or strapi? 
    - Because I already know how to use them, and every learning opportunity should be taken.
- I will build three simple APIs, /login, /add-post, /posts