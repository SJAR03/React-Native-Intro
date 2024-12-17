import { User } from "../interfaces";

interface Props {
  user: User;
}

export const UserRows = ({ user }: Props) => {
  const { avatar, first_name, last_name, email } = user;
  return (
    <tr key={user.id}>
      <td>
        <img style={{ width: "100px" }} src={avatar} alt="Avatar" />
      </td>
      <td>
        {first_name} {last_name}
      </td>
      <td>{email}</td>
    </tr>
  );
};
