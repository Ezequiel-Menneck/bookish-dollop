import bcrypt from 'bcrypt';

const descryptPassword = async (password: string | Buffer, passHash: string) =>
  bcrypt.compare(password, passHash);

export default descryptPassword;
