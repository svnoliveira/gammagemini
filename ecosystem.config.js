module.exports = {
  apps: [
    {
      name: "next-app",
      script: "npm",
      args: "run start",
      env: {
        NODE_ENV: "production",
	PORT: 3001,
      },
      watch: false,
      max_restarts: 10,
      restart_delay: 5000,
    },
  ],
};
