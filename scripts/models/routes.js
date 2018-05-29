//Routes

'use strict'

page('/'
  , (ctx, next) => app.Book.fetchAll(() => app.bookView.initIndexPage(ctx, next))
);

// page('/'
//   , (ctx, next) => app.Book.fetchAll(() => app.bookView.initIndexPage(ctx, next))
//   , (ctx, next) => app.adminView.verify(ctx, next)
// );


page('/books/:book_id', (ctx, next) => app.Book.fetchOne(ctx, () => app.bookView.initDetailPage(ctx, next)));
// page('books/new' app.bookView.initAddBook(ctx))

//from solution code:
// page('/books/:book_id'
//   , (ctx, next) => app.Book.fetchOne(ctx, () => app.bookView.initDetailPage(ctx, next))
//   , (ctx, next) => app.adminView.verify(ctx, next)
// );

page.start();