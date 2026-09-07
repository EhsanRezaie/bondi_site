FROM nginx:alpine

# Static-only site. The built files are volume-mounted from ./dist (CI uploads
# new builds without rebuilding the image); only the nginx config lives here.
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
