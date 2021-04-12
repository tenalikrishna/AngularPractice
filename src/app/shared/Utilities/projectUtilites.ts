export class ProjectUtilitys {
  cunstructor() {}
  showMessage(type: any, title: any, body: any, messageName: any) {
  console.log(type, 'this the type');
  console.log(title, 'this the title');
  console.log(JSON.stringify(body + 'this the body'));
  messageName.pop ({
      type: `${type}`,
      title: `${title}`,
      body: `${body}`,
      showCloseButton: true,
});
}
}
