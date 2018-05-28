'use strict';
page('/',(ctx,next) => app.Book.fetchAll(() => app.bookView.initIndexPage(ctx,next)));
page('/books/add',ctx => app.bookView.initAddForm(ctx));
page('/books/:book_id',(ctx,next)  => app.Book.fetchOne(ctx,() => app.bookView.initDetailPage(ctx,next)));
page();