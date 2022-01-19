{%- liquid

  assign my_variable = my_variable | default: false | downcase

  if my_variable == "true"

  endif

-%}
