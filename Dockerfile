FROM ruby:2.6.5-alpine as build-env

ARG RAILS_ROOT=/app
ARG BUILD_PACKAGES="build-base curl-dev git"
ARG DEV_PACKAGES="sqlite-dev yaml-dev zlib-dev nodejs yarn"
ARG RUBY_PACKAGES="tzdata"
ARG ENV=staging

ENV RAILS_ENV=$ENV
ENV BUNDLE_APP_CONFIG="$RAILS_ROOT/.bundle"

WORKDIR $RAILS_ROOT

# Install packages
RUN apk update \
    && apk upgrade \
    && apk add --update --no-cache $BUILD_PACKAGES $DEV_PACKAGES \
       $RUBY_PACKAGES

COPY Gemfile* ./
RUN bundle config --global frozen 1 \
    && bundle install --path=vendor/bundle \
    # Remove unneeded files (cached *.gem, *.o, *.c)
    && rm -rf vendor/bundle/ruby/2.6.0/cache/*.gem \
    && find vendor/bundle/ruby/2.6.0/gems/ -name "*.c" -delete \
    && find vendor/bundle/ruby/2.6.0/gems/ -name "*.o" -delete

RUN yarn install
COPY . .

RUN rm -rf node_modules tmp/cache app/assets vendor/assets spec

############### Build step done ###############

FROM ruby:2.6.5-alpine

ARG RAILS_ROOT=/app
ARG PACKAGES="tzdata sqlite-dev nodejs bash"
ARG ENV=staging

ENV RAILS_ENV=$ENV
ENV BUNDLE_APP_CONFIG="$RAILS_ROOT/.bundle"

WORKDIR $RAILS_ROOT

# Install packages
RUN apk update \
    && apk upgrade \
    && apk add --update --no-cache $PACKAGES
COPY --from=build-env $RAILS_ROOT $RAILS_ROOT

EXPOSE 3000
CMD ["bin/rails", "server", "-b", "0.0.0.0"]
