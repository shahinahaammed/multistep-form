import FormWrapper from "./FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const UserForm = ({
  firstName,
  lastName,
  age,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        autoFocus
        required
        type="text"
        value={firstName}
        onClick={(e) => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input required type="text" value={lastName}  onClick={(e) => updateFields({ lastName: e.target.value })} />
      <label>Age</label>
      <input required min={1} type="number" value={age}  onClick={(e) => updateFields({ age: e.target.value })} />
    </FormWrapper>
  );
};

export default UserForm;
