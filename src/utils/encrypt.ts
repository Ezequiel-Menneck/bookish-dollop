import bcrypt from 'bcrypt';

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT));
  return bcrypt.hash(password, salt);
};

export default encryptPassword;
