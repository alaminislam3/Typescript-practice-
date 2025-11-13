// problem
const UserRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viwer: "Viewer",
} as const;

const canEdit = (role: (typeof UserRole)[keyof typeof UserRole]) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRole.Admin)
console.log(isEditPermissable)