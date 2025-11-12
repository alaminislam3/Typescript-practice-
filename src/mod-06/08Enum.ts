//

enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viwer = "Viwer",
}

const canEdit = (role: UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;

};

const checkKori = canEdit(UserRole.Admin);
console.log(checkKori)
