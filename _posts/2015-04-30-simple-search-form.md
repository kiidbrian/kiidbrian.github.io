---
layout: post
title: "simple search form with ruby on rails"
modified: 2015-04-30 18:55:55 +0000
tags: [search form]
image:
  feature:
  credit:
  creditlink:
comments:
share:
---

Okay so i was building a simple database application that needed a search form
feature. So i just decided to write about it, atleast save it today for a later use
tomorrow.

There are a few bootstrap and font-awesome helper classes in there to keep the project bootstrapped.

Place this code in your <code>application.html.erb</code>

{% highlight html %}
<!DOCTYPE html>
<head>
  <title>Simple Search Form</title>
</head>
<body>
  <!-- When submit the form, the view rendered will be the index view of our members resource -->
  <%= form_tag(members_path, :method => "get", class: "navbar-form", id: "search-form") do %>
    <div class="form-group">
      <%= text_field_tag :search, params[:search], class: "col-md-12 form-control", placeholder: "Search Members" %>
       <!-- Font Awesome for the search icon -->
      <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
    </div>
  <% end %>
  <%= yield %>
</body>
{% endhighlight %}

Then the business logic in your model <code>models.rb</code> will be:


{% highlight ruby %}
def Article < ActiveRecord::Base
  attr_accessible :name, :age

  validates :name, presence: true, uniqueness: true
  validates :age, presence: true

  # It returns the members whose name contain one or more words that form the query
  def self.search(query)
    # where(:name, query) -> This would return an exact match of the query
    where("name like ?", "%#{query}%")
  end
end
{% endhighlight %}

In your `members_controller.rb`, you just need to verify when the user is performing a search request.


{% highlight ruby %}
def MembersController < ApplicationController
  def index
    if params[:search]
      @members = Member.search(params[:search]).order("created_at DESC")
    else
      @members = Member.order("created_at DESC")
    end
  end
end
{% endhighlight %}

Finally, in your `views/members/index.html.erb`, render the content:

{% highlight html %}
<% @members.each do |article| %>
  <div class="member">
    <h1 class="member-name"><%= link_to member.name %></h1>
    <p class="member-"><%= member.age %></p>
  </div>
<% end %>
{% endhighlight %}

As you can see, building a basic search form is not tedious at all, and even we could say that it is obvious, but sometimes it is during these basic features that we lose most of our development time.

If you want something more complex, a good reference will be [Railscasts](http://railscasts.com/).

