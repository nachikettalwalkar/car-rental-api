import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const signup = async (req, res) => {
    try {
      const hash = await hashPassword(req.body.password);
      const user = await prisma.user.create({
          data: {
              username: req.body.username,
              password: hash,
              name: req.body.name,
              licenseNo: req.body.license_no
          }
      });
  
      const token = createJWT(user);
      res.success(token);
    } catch (err) {
      res.error('Invalid Input', 400, err.message);
    }
}

export const signin = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    });
  
    const isValid = await comparePasswords(req.body.password, user.password);
  
    if (!isValid) {
      res.status(401);
      res.send("Invalid username or password");
      return;
    }
  
    const token = createJWT(user);
    res.success(token);
  } catch(err) {
    res.error('Invalid Input', 400, err.message);
  }
};
