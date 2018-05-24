//Routes

'use strict'

page('/', (ctx) => app.Book.fetchAll(app.bookView.initIndexPage));
// console.log(ctx);
// page('',);
page('/books/:book_id', (ctx) => app.Book.fetchOne(ctx, app.bookView.initIndexPage))



page.start();