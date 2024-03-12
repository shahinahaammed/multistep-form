import FormWrapper from "./FormWrapper"

type AccountData = {
  email: string;
  password: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};


const AccountForm = ({email,password,updateFields}:AccountFormProps) => {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input autoFocus required type="email" value={email}
        onClick={(e) => updateFields({ email: e.target.value })} />
      <label>Password</label>
      <input required type="password" value={password}
        onClick={(e) => updateFields({ password: e.target.value })} />
    </FormWrapper>
  )
}

export default AccountForm